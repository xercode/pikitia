module.exports = {
  mongodb: {
    uri: undefined,
  },
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
    slowMo: 250,
    page: {
      timeout: 0
    }
  }
};
