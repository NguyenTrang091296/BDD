exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost/redSHOP1',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    ProductPage: "./pages/ProductPage.js",
    ProductSteps: "./steps/ProductSteps.js",
    FrontEndPage: "./pages/FrontEndPage.js",
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'BDD',
  "compilerOptions": {
    "allowJs": true
  }
}