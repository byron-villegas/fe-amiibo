describe('Navbar Test', () => {
  before((browser) => {
    browser.init()
  })

  it('Validate navbar if present', () => {
    // add delay to wait for the page to load
    browser.pause(2000);

    browser.assert.elementPresent('nav');
  })

  it('Validate navbar links', () => {
    // add delay to wait for the page to load
    browser.pause(2000);

    browser.assert.elementPresent('nav a[href="/"]');
    browser.assert.elementPresent('nav a[href="/about-us"]');
  })

  after((browser) => browser.end())
})