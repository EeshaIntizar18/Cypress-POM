/// <reference types="cypress" />
class Filters{
    filter()
    {
        const s1=cy.get('#layered-filter-block > div.block-title.filter-title > strong')
        s1.click({ multiple: true ,force: true })
        cy.wait(4000)
        return this
    }
    sizefilter()
    {
    //click on size filter
    const s1=cy.get('#narrow-by-list > div:nth-child(1)')
    s1.click({ multiple: true ,force: true })
    cy.wait(4000)
    return this
    
    }
    
    clickSize(){
    //click on size
    cy.wait(1000)
    const s2=cy.get('#tab-1 > a:nth-child(2) > div')
    s2.click({ multiple: true ,force: true })
    cy.wait(3000)
    return this
    }
    colourfilter()
    {
        cy.wait(2000)
    //click on colour filter
    const c1=cy.get('#narrow-by-list > div:nth-child(2) > div.filter-options-title > div')
    c1.click({ multiple: true ,force: true })
    cy.wait(3000)
    return this
    }
    clickColour()
    {
        cy.wait(2000)
    //click on colour
    const c2=cy.get('#narrow-by-list > div.filter-options-item.togglecoll.activeTog > div.filter-options-content > ol > li:nth-child(1) > a')
    c2.click({ multiple: true ,force: true })
    cy.wait(2000)
    return this
    
    }
    }
    export default Filters