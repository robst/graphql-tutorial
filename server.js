'use strict'

const { ApolloServer, gql } = require("apollo-server")
const port = process.env.PORT || 8080

const accounts = [
  {
    "name": "Muster"
  },
  {
    "name": "test"
  }
]

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