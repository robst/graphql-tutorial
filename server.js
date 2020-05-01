'use strict'

const { ApolloServer, gql } = require("apollo-server")
const fs = require('fs');

const port = process.env.PORT || 8080
const accounts = JSON.parse(fs.readFileSync('src/db/accounts.json', 'utf8'));

const typeDefs = gql`
type Query {
  helloWorld: String
  listAccounts: [Account!]!
}

type Account {
  name: String!
}

`

const resolvers = {
  Query: {
    helloWorld() {
      return 'hello world'
    },
    listAccounts() {
      return accounts
    }
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