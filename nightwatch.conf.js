module.exports = {
  src_folders: ['test'],
  page_objects_path: ['pages'],
  custom_commands_path: ['custom_commands'],
  custom_assertions_path: ['nightwatch/custom-assertions'],
  plugins: [],
  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "https://www.saucedemo.com/",
      "globals": {
        "username": "standard_user",
        "password": "secret_sauce"
      },

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },
      
    },
    
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for using the Sauce Labs cloud service                          |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - SAUCE_USERNAME                                                              |
    // - SAUCE_ACCESS_KEY                                                            |
    //////////////////////////////////////////////////////////////////////////////////
    saucelabs: {
      selenium: {
        host: 'ondemand.saucelabs.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
      desiredCapabilities: {
        'sauce:options': {
          username: '${SAUCE_USERNAME}',
          accessKey: '${SAUCE_ACCESS_KEY}',
          screenResolution: '1280x1024'
          // https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--region
          // region: 'us-west-1'
          // https://docs.saucelabs.com/dev/test-configuration-options/#tunnelidentifier
          // parentTunnel: '',
          // tunnelIdentifier: '',
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
        // https://docs.saucelabs.com/dev/test-configuration-options/#timezone
        timeZone: 'London'
      },
      disable_error_log: false,
      webdriver: {
        start_process: false
      }
    },
    
    'saucelabs.chrome': {
      extends: 'saucelabs',
      desiredCapabilities: {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'goog:chromeOptions': {
          w3c: true
        }
      }
    },
    
    'saucelabs.safari': {
      extends: 'saucelabs',
      desiredCapabilities: {
        browserName: 'safari',
        browserVersion: 'latest',
        platformName: 'macOS 10.13'
      }
    },
    
  },
  
};
