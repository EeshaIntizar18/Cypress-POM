/// <reference types="cypress" />
class Pdp{
  pdp()
  {
//clcik on product
const p1=cy.get('#layer-product-list > div.products.wrapper.grid.columns4.products-grid > ol > li:nth-child(3) > div > div.product.details.product-item-details > strong > a')
p1.click({ multiple: true ,force: true })
cy.wait(6000)
return this
  }  

  sizedrop()
  {
  //click on size dropdown
cy.wait(1000)
const s1=cy.get('#tabs-swatches > div > div.custom-select-wrapper-size > div > div.custom-select__trigger-size')
s1.click({ multiple: true ,force: true })
return this
  }


  clicksize(){
cy.wait(4000)
//clcik on size
const s2=cy.get('#controlId-item-17')
s2.click({ multiple: true ,force: true })
return this
}

addtocart(){
//click on add to cart button
cy.wait(3000)
const a1=cy.get('#product-addtocart-button')
a1.click({ multiple: true ,force: true })
cy.wait(5000)
return this

}
checkout()
{
  //click on checkout button
  cy.wait(2000)
    const c=cy.get('#html-body > div.page-wrapper > header > div.header.content > div > div.col-xl-3.col-12.rightBlock > div.minicart-wrapper._has-modal > div.modals-wrapper > aside > div.modal-inner-wrap > footer > button.checkout')
    c.click({ multiple: true ,force: true })
    cy.wait(2000)
    return this
    
}
}
export default Pdp 