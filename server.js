'use strict'

const { ApolloServer } = require("apollo-server")
const port = process.env.PORT || 8080
const resolvers = require("./src/resolvers")
const typeDefs = require("./src/definitions")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  tracing: true
})

server.listen(port).then(({ url }) => {
  console.log(`listen on ${url}`)
})