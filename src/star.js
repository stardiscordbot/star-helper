require('colors')
const {Client,Collection} = require('eris')
const {token} = require('./config')

const client = new Client(token, {
  restMode: true,
  rest: {
    baseURL: '/api/v9'
  }
})

client.commands = new Collection()
client.aliases = new Collection()
client.events = new Collection()

global.star = client
global.db = require('star-database-manager')

require('./client/handler/comandos')
require('./client/handler/eventos')

client.connect()
