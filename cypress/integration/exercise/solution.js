context("Tic Tac Toe", () => {
    it('changes player after every turn', () => {
        cy.contains('current player: X')
        cy.get('#square-0').click()
        cy.contains('current player: O')
    })
    it('lets X win diagonally left to right', () => {
        cy.visit("http://localhost:3000/")
        cy.get('#square-0').click()
        cy.get('#square-2').click()
        cy.get('#square-4').click()
        cy.get('#square-3').click()
        cy.get('#square-8').click()
     })
})