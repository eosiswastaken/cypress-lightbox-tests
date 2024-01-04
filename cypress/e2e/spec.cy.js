describe('template spec', () => {
  it('passes', () => {
    cy.visit('../../index.html')

    cy.get('[data-cy="title"]').should('have.text','Caesar Cipher')
    cy.get('[data-cy="key"]').type(3)
    cy.get('[data-cy="message"]').type("Hello World")
    cy.get('[data-cy="button"]').click()
    cy.get('[data-cy="cipheredMessage"]').should('have.text','khoor zruog')

  })
})