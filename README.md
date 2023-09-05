# Trabalho Final Disciplina Arquitetura Backend

## Middleware em GraphQL

Integrantes do grupo:

* Luiz Gabriel Santos Fernandes;
* Raife Ferreira Paiva;
* Renan Carlos Silva Braz Tafner.

Parar rodar, basta rodar o comando "node index.js" na pasta raíz do projeto.

Query GraphQL para inserir uma enquete:

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

Query GraphQL para recuperar todas as enquetes:

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

QUery GraphQL para recuperar uma enquete específica:

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

Query para votar "Sim" para enquete:

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

Query para votar "Não" para enquete:

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
