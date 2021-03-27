it('acessando Google', ()=>{
    cy.visit(Cypress.env("hmg"))
})

it('acessando Max', ()=>{
    cy.visit(Cypress.env("prod"))
})