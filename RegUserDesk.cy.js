/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


import 'cypress-mochawesome-reporter/register';
import Browser from '../Integration/Browser';
import LoginUser from '../Integration/LoginUser'
import Search from '../Integration/Search';
import Filters from '../Integration/Filters';
import Pdp from '../Integration/Pdp';

// import Viewbag from '../Integration/Viewbag';
import ShipAddress from '../Integration/ShipAddress';
import PayByCard from '../Integration/PayByCard';


  
describe('Registered user', () => {
  beforeEach(() => {
    cy.viewport(1440, 1220)
  })
 

  it("Registered user", () =>
    {
      const b =new Browser()
      const login =new LoginUser()
      const s1=new Search()
      const f=new Filters()
      const p=new Pdp()
      const s=new ShipAddress()
      const pay=new PayByCard()
      b.browser()
     
  
      
  
      login.accountl()
      login.account()
      login.email()
      login.password()
      login.btn()
      s1.search()
      
 
  
    f.sizefilter()
    f.clickSize()
    f.colourfilter()
    f.clickColour()
  

  
   p.pdp()
  p.sizedrop()
  p.clicksize()
  p.addtocart()
 p.checkout()



//   const v=new Viewbag()
//   v.viewbag()
//   v.quantity()
//   v.clickcheckout()



 

 s.shipping()
 s.payment()


    pay.c()
   
})

})
