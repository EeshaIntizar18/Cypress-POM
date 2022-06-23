/// <reference types="cypress" />

class Browser {

  browser()
  {
     return cy.visit('https://m2.staging.ego.co.uk.cfstack.com/')
  }
  
  }
  export default Browser