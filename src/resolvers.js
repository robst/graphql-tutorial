const accounts = require("./accounts")

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

module.exports = resolvers
