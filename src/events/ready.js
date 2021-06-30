module.exports = class ReadyEvent {
  constructor () {
    return {
      nome: 'ready',
      run: this.run
    }
  }

  async run () {
    require('colors')
    console.log(`[CLIENT] ${global.star.user.username + '#' + global.star.user.discriminator} Iniciada!`.dim.brightMagenta)

    global.star.editStatus('online', {
      game: global.star.user.username,
      name: `Retirando suas dúvidas [v.1.0.0]`,
      type: 5
    })

  }
}
