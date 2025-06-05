/// <reference types="cypress" />

describe('teste para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/;')
    })

    it('deve remover contato', () =>{
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Contato Removido!')
        })
    })
})