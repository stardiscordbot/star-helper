require('colors')
const {Client} = require('eris')
const {token} = require('./config')

const client = new Client(token, {
  restMode: true,
  rest: {
    baseURL: '/api/v9'
  }
})

client.connect()
