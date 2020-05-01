'use strict'

const { ApolloServer, gql } = require("apollo-server")
const fs = require('fs');

const port = process.env.PORT || 8080
const accounts = JSON.parse(fs.readFileSync('src/db/accounts.json', 'utf8'));

const typeDefs = gql`
type Query {
  listAccounts: [Account!]!
  findAccountById(id: Int): Account
  findAccountsByName(searchphrase: String): [Account]!
}

type Account {
  name: String!
}

`

const resolvers = {
  Query: {
    listAccounts() {
      return accounts
    },
    findAccountById(_, args) {
      const { id } = args
      return accounts.filter(account => account.id === id)[0]
    },
    findAccountsByName(_, args) {
      const { searchphrase } = args
      return accounts.filter(account => RegExp(searchphrase).test(account.name))
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  tracing: true
})

server.listen(port).then(({ url }) => {
  console.log(`listen on ${url}`)
})