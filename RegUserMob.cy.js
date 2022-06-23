/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  import 'cypress-plugin-stripe-elements';
  import 'cypress-mochawesome-reporter/register';
  import Browser from '../Integration/Browser';
  import LoginMob from '../Integration/LoginMob'
  import Search from '../Integration/Search';
  import FiltersMob from '../Integration/FiltersMob';
  import Pdp from '../Integration/Pdp';
    // import Viewbag from '../Integration/Viewbag';
  import ShipAddress from '../Integration/ShipAddress';
  import PayByCard from '../Integration/PayByCard';
  
  describe('Reg user', () => {
    beforeEach(() => {
      cy.viewport(425, 976)
    })
    
  it("Registered user", () =>
  {
    const b =new Browser()
    const login =new LoginMob()
    const s1=new Search()
    const f=new FiltersMob()
    const p=new Pdp()
    const s=new ShipAddress()
    const pay=new PayByCard()

         //browser
         b.browser()
     
  
      
         //login
             login.accountl()
             login.account()
             login.email()
             login.password()
             login.btn()
             s1.search()
             
        
         //filters
           f.sizefilter()
           f.clickSize()
           f.colourfilter()
           f.clickColour()
         
       
         //pdp
          p.pdp()
         p.sizedrop()
         p.clicksize()
         p.addtocart()
        p.checkout()
       
       
       
       //   const v=new Viewbag()
       //   v.viewbag()
       //   v.quantity()
       //   v.clickcheckout()
       
       
       
        
       //shippingaddress
        s.shipping()
        s.payment()
       
       //paybycard
           pay.c()
 
})

  })
  
  