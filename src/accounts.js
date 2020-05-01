const fs = require('fs');

const accounts = JSON.parse(fs.readFileSync('src/db/accounts.json', 'utf8'));

module.exports = accounts
