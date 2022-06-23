/// <reference types="cypress" />
class Viewbag{
   
 viewbag()
 {
        
//click on view bag
const v1=cy.get('#html-body > div.page-wrapper > header > div.header.content > div > div.col-xl-3.col-12.rightBlock > div.minicart-wrapper._has-modal > div.modals-wrapper > aside > div.modal-inner-wrap > footer > button.view')
v1.click({ multiple: true ,force: true })
return this
    }

quantity(){
cy.wait(6000)

//click on quantity swatch
const q1=cy.get('select[data-item-name="Fiat Lace Up Square Toe Sculptured Heel In Black Faux Leather"]').select('4', { multiple: true, force: true })
q1.select('4',{ multiple: true ,force: true })
return this
}

clickcheckout(){
    cy.wait(1000)
//click on checkout
const c1=cy.get('#maincontent > div > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button')
c1.click({ multiple: true ,force: true })
return this

    }
}
export default Viewbag