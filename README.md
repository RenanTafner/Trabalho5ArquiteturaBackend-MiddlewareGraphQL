# Trabalho 5 Disciplina Arquitetura Backend

## Sistema de Votação em Tempo Real

## Middleware em GraphQL

## Integrantes do grupo:

* Luiz Gabriel Santos Fernandes;
* Raife Ferreira Paiva;
* Renan Carlos Silva Braz Tafner.

Parar rodar, basta rodar o comando "npm install" e depois "node index.js", ambos na pasta raíz do projeto.

## Observação

Todas as queries e mutations exemplificadas neste documento foram testadas usando o servidor Apollo Server para GraphQL em Node Js.

## Queries GraphQL

### enquete : [Enquete]

Query GraphQL para recuperar todas as enquetes.

#### Parâmetros:

N/A

#### Retorno:

Um array de enquetes com seus respectivos dados.

#### Exemplo:

```
query Query {
  enquetes {
    enqueteId
    enqueteNome
    enqueteQuantVotosNao
    enqueteQuantVotosSim
  }
}
```

### enquete : Enquete

Query GraphQL para recuperar uma enquete específica.

#### Parâmetros:

idEnquete: String -> ID da enquete que se quer recuperar.

#### Retorno:

Uma enquete específica com seus respectivos dados.

#### Exemplo:

```
query Query($idEnquete: String) {
  enquete(idEnquete: "1") {
    enqueteId
    enqueteNome
    enqueteQuantVotosNao
    enqueteQuantVotosSim
  }
}
```

Onde "1" é o ID da enquete que se quer recuperar.

## Mutations Grahpql

### addEnquete : Enquete

Mutation GraphQL para inserir uma enquete.

#### Parâmetros:

enqueteNomeInsert : String -> Nome/pergunta da enquete que se quer inserir.

#### Retorno:

A enquete inserida com seus respectivos dados.

#### Exemplo:

```
mutation Mutation($enqueteNomeInsert: String) {
  addEnquete(enqueteNomeInsert: "testeNovaEnquete") {
    enqueteId
    enqueteNome
    enqueteQuantVotosNao
    enqueteQuantVotosSim
  }
}
```

Onde "testeNovaEnquete" é o nome da enquete que se quer inserir.

### voteEnqueteSim : Enquete

Mutation GraphQL para votar "Sim" para enquete.

#### Parâmetros:

idEnquete : String -> ID da enquete que se quer votar "Sim".

#### Retorno:

A enquete em que se votou "Sim" com seus respectivos dados.

#### Exemplo:

```
mutation VoteEnquete($idEnquete: String) {
  voteEnqueteSim(idEnquete: "1") {
    enqueteId
    enqueteNome
    enqueteQuantVotosSim
    enqueteQuantVotosNao
  }
}
```

Onde "1" é o ID da enquete que se quer votar "Sim".

### voteEnqueteNao : Enquete

Mutation GraphQL para votar "Não" para enquete.

#### Parâmetros:

idEnquete : String ID da enquete que se quer votar "Não".

#### Retorno:

A enquete em que se votou "Não" com seus respectivos dados.

#### Exemplo:

```
mutation VoteEnquete($idEnquete: String) {
  voteEnqueteNao(idEnquete: "1") {
    enqueteId
    enqueteNome
    enqueteQuantVotosSim
    enqueteQuantVotosNao
  }
}
```

Onde "1" é o ID da enquete que se quer votar "Não".
