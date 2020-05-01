const { gql } = require("apollo-server")

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

module.exports = typeDefs
