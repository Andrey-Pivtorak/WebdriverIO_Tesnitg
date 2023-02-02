import { config as baseConfig } from "./wdio.conf.js";


export const config = {
  ...baseConfig,
  hostname: 'localhost',
  port: 4444,
  maxInstances: 5,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--disable-dev-shm-usage', '--disable-gpu']
      },
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
      acceptInsecureCerts: true,
      'moz:firefoxOptions': {
        args: ['--disable-dev-shm-usage', '--disable-gpu']
      },
    },
    {
      maxInstances: 1,
      browserName: 'MicrosoftEdge',
      acceptInsecureCerts: true
    }
  ],
  services: []
}
