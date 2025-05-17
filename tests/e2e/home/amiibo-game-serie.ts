describe('Amiibo Game Serie Test', () => {
  before((browser) => {
    browser.init()
  })

  it('Validate Amiibo Game Serie if present', () => {
    browser
      .pause(5000)
      // Obtiene el texto del primer <a> dentro de .card-body
      .getText('div.card-body a', function(result) {
        this.assert.equal(result.value, 'Animal Crossing');
      })
      // Obtiene el texto del primer <small> dentro de .card
      .getText('div.card small', function(result) {
        this.assert.equal(result.value, 'Animal Crossing');
      });
  })

  after((browser) => browser.end())
})