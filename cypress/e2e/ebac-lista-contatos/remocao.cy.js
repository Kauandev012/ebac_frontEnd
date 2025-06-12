/// <reference types="cypress" />

describe('teste para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve remover contato', () =>{
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk > :nth-child(5)').should('not.exist')
    })
})