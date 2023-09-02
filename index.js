import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const baseURL = 'https://2knh0oc42g.execute-api.us-east-1.amazonaws.com';

const typeDefs = `#graphql

  type Enquete {
    enqueteId: String
    enqueteNome: String
    enqueteQuantVotosSim: Int
    enqueteQuantVotosNao: Int
  }

  type Query {
    enquetes: [Enquete]
    enquete (idEnquete: String): Enquete
  }

  type Mutation {
    addEnquete(enqueteNomeInsert: String): Enquete
    voteEnqueteSim(idEnquete: String): Enquete
    voteEnqueteNao(idEnquete: String): Enquete
  }
`;

const resolvers = {
  Query: {
    enquetes: async () => { 
        return await fetch(`${baseURL}/enquetes`
        ,{ 
			method: 'GET', 
        }
        ).then(res => res.json());
    },
    
    enquete: async (_, { idEnquete }) => { 
        return await fetch(`${baseURL}/enquetes/${idEnquete}`
        ,{ 
			method: 'GET', 
        }
        ).then(res => res.json());
    },
    
  },

 Mutation: {
    addEnquete: async (_, { enqueteNomeInsert }) => {

      const enqueteNomeInsertAux = { enqueteNomeInsert };

      return await fetch(`${baseURL}/enquetes`, { 
        method: 'POST', 
        body: JSON.stringify(enqueteNomeInsertAux),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json());
    },

    voteEnqueteSim: async (_, { idEnquete }) => {

        return await fetch(`${baseURL}/enquetes/votarsim/${idEnquete}`
        ,{ 
			method: 'PATCH', 
        }
        ).then(res => res.json());
      },

    voteEnqueteNao: async (_, { idEnquete }) => {

        return await fetch(`${baseURL}/enquetes/votarnao/${idEnquete}`
        ,{ 
			method: 'PATCH', 
        }
        ).then(res => res.json());
      },

    },
  
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);