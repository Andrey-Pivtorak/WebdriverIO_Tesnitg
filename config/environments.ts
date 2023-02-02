exports.config = {
  // Environment default
    capabilities: {
      browserName: 'chrome',
      // 'goog:chromeOptions': {
      //   args: ['--window-size=1400,750']
      // }
  },
  // Environment 1
  firefox: {
    capabilities: {
      maxInstances: 2,
      browserName: 'firefox',
      acceptInsecureCerts: true,
      // 'moz:firefoxOptions': {
      //   args: ["--width=1400", "--height=800"]
      // },
    }
  },
  // Environment 2
  edge: {
    capabilities: {
      maxInstances: 2,
      browserName: 'MicrosoftEdge',
      acceptInsecureCerts: true
    }
  }
};

// module.exports = {
//   user: 'https://telnyx.com/',
//   dev: 'https://developers.telnyx.com/docs/v2',
//   supp: 'https://support.telnyx.com/en/'
// }
