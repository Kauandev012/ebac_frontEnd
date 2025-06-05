/// <reference types="cypress" />

describe('teste para alteração de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve alterar contato', () =>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').first().click()
        cy.get('input[type="text"]').clear().type('gian')
        cy.get('input[type="email"]').clear().type('teste@gmail.com')
        cy.get('.alterar').click()
    })

    it('verificar se o elemento foi alterado', () =>{
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'gian')
    })
})