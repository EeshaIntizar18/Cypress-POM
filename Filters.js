/// <reference types="cypress" />
class Filters{
sizefilter()
{
//click on size filter
const s1=cy.get('#narrow-by-list > div:nth-child(1) > div.filter-options-title')
s1.click({ multiple: true ,force: true })
cy.wait(2000)
return this

}

clickSize(){
//click on size
const s2=cy.get('#tab-1 > a:nth-child(3)')
s2.click({ multiple: true ,force: true })
cy.wait(3000)
return this
}
colourfilter()
{
//click on colour filter
const c1=cy.get('#narrow-by-list > div:nth-child(2) > div.filter-options-title')
c1.click({ multiple: true ,force: true })
cy.wait(2000)
return this
}
clickColour()
{
//click on colour
const c2=cy.get('#narrow-by-list > div.filter-options-item.togglecoll.activeTog > div.filter-options-content > ol > li:nth-child(1) > a')
c2.click({ multiple: true ,force: true })
cy.wait(3000)
return this

}
}
export default Filters