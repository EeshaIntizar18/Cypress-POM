/// <reference types="cypress" />
class Search{
    search()
    {
        cy.wait(2000)
       const s1= cy.get('#search').focus()
       s1.type('heels{enter}')
       cy.wait(2000)
       return this
    }
}
export default Search