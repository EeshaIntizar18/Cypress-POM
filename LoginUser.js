/// <reference types="cypress" />
class LoginUser{
accountl()
  {
  const btn=cy.get('#html-body > div.page-wrapper > header > div.header.content > div > div.col-xl-3.col-12.rightBlock > div.links-wrapper > button')
  btn.click({force: true})
  return this
  }
  account()
  {
  const field1=cy.contains('Account')
  field1.click({force: true})
  return this
  }
  email()
  {
      const field=cy.get('#email')
      field.type('usman.ali@rltsquare.com')
      return this
  }
  password()
  {
      const field=cy.get('#pass')
      field.type('@Mani112233')
      cy.wait(1000)
      return this
  }
  btn()
  {
    
      const field=cy.get('#send2')
      field.click({force: true})
      cy.wait(2000)
      return this
      
  }

 
}

export default LoginUser