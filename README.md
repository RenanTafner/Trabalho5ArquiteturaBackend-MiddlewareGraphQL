# Trabalho 5 Disciplina Arquitetura Backend

## Sistema de Votação em Tempo Real

## Middleware em GraphQL

## Integrantes do grupo:

* Luiz Gabriel Santos Fernandes;
* Raife Ferreira Paiva;
* Renan Carlos Silva Braz Tafner.

Parar rodar, basta rodar o comando "npm install" e depois "node index.js", ambos na pasta raíz do projeto.

## Queries GraphQL

### enquete : [Enquete]

Query GraphQL para recuperar todas as enquetes.

#### Parâmetros:

N/A

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

idEnquete: String

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

enqueteNomeInsert : String

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

idEnquete : String

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

idEnquete : String

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
