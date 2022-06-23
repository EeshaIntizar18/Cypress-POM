/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  import 'cypress-plugin-stripe-elements';
  import 'cypress-mochawesome-reporter/register';
  import Browser from '../Integration/Browser';
  import Search from '../Integration/Search';
  import Filters from '../Integration/Filters';
  import Pdp from '../Integration/Pdp';
//   import Viewbag from '../Integration/Viewbag';
  import GuestShippingAddress from '../Integration/GuestShippingAddress';
  import PayByCard from '../Integration/PayByCard';
  
  
    
  describe('Guest user', () => {
    beforeEach(() => {
      cy.viewport(1440, 1220)
    })
   
  
    it("Open Browser", () =>
      {
        const b =new Browser()
        const s1=new Search()
        const f=new Filters()
        const p=new Pdp()
        const s=new GuestShippingAddress()
        const pay=new PayByCard()

//browser
        b.browser()

        //search
        s1.search('heels{enter}')
        
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
    
  //   // v.viewbag()
  //   // v.quantity()
  //   // v.clickcheckout()

//shippingaddress
  s.email()
  s.country()
  s.firstname()
  s.lastname()
  s.postcode()
  s.address()
  s.region()
  s.city()
  s.phone()
  s.shipping()
  s.payment()

  //paybycard
    pay.c()
    
    
  })
  })
  
  