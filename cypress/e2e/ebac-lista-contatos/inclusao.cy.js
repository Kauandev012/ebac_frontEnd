/// <reference types="cypress" />

describe('teste para a inclusao de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve prencher formulario de inserir contato', () => {
        cy.get('input[type="text"').type('kauan araujo')
        cy.get('input[type="email"').type('kauanteste@gmail.com')
        cy.get('input[type="tel"').type('11 12345678')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > :nth-child(5)').should('exist')
    })
})

