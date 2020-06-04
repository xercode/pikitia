module.exports = {
  mongodb: {
    uri: undefined,
  },
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
    page: {
      timeout: 0
    }
  }
};
