/// <reference types="cypress" />
class PayByCard {
  c() {
    //click on pay by card
    cy.wait(2000)
    cy.get('#checkoutcom_card_payment_container > div.payment-method-title.field.choice > label').click({ multiple: true ,force: true })
    
    cy.wait(2000)
    
    //Enter card number
    cy
  .get('iframe')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
  .find('input[name="cardnumber"]')
  .type('4242424242424242',{ multiple: true ,force: true })
  cy.wait(2000)

  //Enter exp date
cy
  .get('iframe')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
  .find('input[name="exp-date"]')
  .type('0330',{ multiple: true ,force: true })
  cy.wait(2000)

  //Enter cvc
cy
  .get('iframe')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
  .find('input[name="cvc"]')
  .type('100',{ multiple: true ,force: true })

//click on button
  cy.wait(4000)
  cy.get('#checkoutcom_card_payment_container > div.payment-method-content > div.actions-toolbar > div').click()
  cy.wait(6000)


  cy
  .get('body > iframe')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
  .find('input[name="password"]')
  .type('Checkout1!',{ multiple: true ,force: true })
  cy.wait(2000)
  
  cy
  .get('body > iframe')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
  .find('#txtButton')
  .click({ multiple: true ,force: true })
  cy.wait(2000)

}

}

export default PayByCard