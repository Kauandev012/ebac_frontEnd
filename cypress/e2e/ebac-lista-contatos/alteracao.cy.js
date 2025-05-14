/// <reference types="cypress" />

describe('teste para alteração de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/;')
    })

    it('deve alterar contato', () =>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').first().click()
        cy.get('input[type="text"]').type('gian')
        cy.get('input[type="email"]').type('testegmail.com')
        cy.get('.alterar').click()
    })
})