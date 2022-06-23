/// <reference types="cypress" />

class GuestShippingAddress{
email()
{
//click on email
cy.wait(6000)
const email=cy.get('#customer-email')
email.type('usman.ali@rltsquare.com',{ multiple: true,force: true })
cy.wait(1000)
return this
}
country()
{
    const country=cy.get('select').eq(0)
    country.select('GB')
    cy.wait(500)
    return this
}
firstname()
{
    const fn=cy.get('[name=firstname]').eq(0)
    fn.type('test',{ multiple: true,force: true })
    cy.wait(500)
    return this
}
lastname()
{
    const ln=cy.get('[name=lastname]').eq(0)
    ln.type('test',{ multiple: true,force: true })
    cy.wait(500)
    return this
}
postcode()
{
    const pc=cy.get('[name=postcode]').eq(0)
    pc.type('M320JT'),{ multiple: true,force: true }
    cy.wait(500)
    return this
}
address()
{
    const address=cy.get('*[class^="input-text street-zero"]').eq(0)
    address.type('Unit A1,Thomas Street',{ multiple: true ,force: true })
    cy.wait(500)
    return this
}
region()
{
    const region=cy.get('[name=region]').eq(0)
    region.type('England',{ multiple: true ,force: true })
    cy.wait(500)
    return this
}
city()
{
    const city=cy.get('[name=city]').eq(0)
    city.type('Manchester',{ multiple: true,force: true })
    cy.wait(500)
    return this
}
phone()
{
    const phone=cy.get('[name=telephone]').eq(0)
    phone.type('447911123456',{ multiple: true,force: true })
    cy.wait(500)
    return this
}
shipping()
{
    cy.wait(3000)
    const s=cy.get('#label_method_royalmailnextworkingday_RoyalMailHV')
    s.click({ multiple: true,force: true })
    cy.wait(7000)
    return this

}
payment()
{
    cy.wait(5000)
    const p=cy.get('#shipping-method-buttons-container > div.primary > button')
    p.click({ multiple: true,force: true })
    return this


}
}
export default GuestShippingAddress