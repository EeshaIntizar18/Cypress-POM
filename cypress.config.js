const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity:false,
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "My Test Suite",
    "embeddedScreenshots": true,
    "inlineAssets": true
  },
  "reporter": "../node_modules/mochawesome/src/mochawesome.js",
   "reporterOptions": {
     "overwrite": false,
     "html": true,
     "json": false
   },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
    "compilerOptions": {
      "types": ["cypress", "cypress-plugin-stripe-elements"]
    }
  
});
