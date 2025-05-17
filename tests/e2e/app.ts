describe('App Test', () => {
  before((browser) => {
    browser.init()
  })

  it('Visit the app root and validate title', () => {
    // add delay to wait for the page to load
    browser.pause(2000);

    browser.assert.titleEquals('Amiibo');
  })

  after((browser) => browser.end())
})