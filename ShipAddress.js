/// <reference types="cypress" />
class ShipAddress
{
   
    shipping()
    {
        cy.wait(3000)
        const p=cy.get('#label_method_warehousecollection_egostaffonly_RoyalMail')
        p.click({ multiple: true,force: true })
        cy.wait(1000)
        return this
    
    }
    payment()
    {
        cy.wait(4000)
        const p=cy.get('#shipping-method-buttons-container > div.primary > button')
        p.click({ multiple: true,force: true })
        cy.wait(3000)
        return this
    
    }
}
export default ShipAddress