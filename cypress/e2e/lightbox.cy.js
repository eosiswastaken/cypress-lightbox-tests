describe('lightbox spec', () => {
  it('lightbox opens when clicking on image', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click()
    cy.get('[data-cy="lightbox"').should('be.visible')



  })
  
  it('lightbox closes when clicking outside lightbox', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click()
    cy.get('body').click(0,0)
    cy.get('[data-cy="lightbox"').should('not.be.visible')


  })
  
  it('like counter updates in the overlay and in the lightbox when liking', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click()
    cy.get('[data-cy="likebutton"]').click()
    cy.get('[data-cy="likescount-lightbox"]').should('have.text',"1")
    cy.get('body').click(0,0)
    cy.get('[data-cy="likescount-overlay"]').should('have.text',"1")

  })
  
  it('like counter updates in the overlay and in the lightbox when removing like', () => {
    cy.visit('../../lightbox.html')



  })
  
  it('comment list updates and displays the new comment when a comment is added', () => {
    cy.visit('../../lightbox.html')



  })
  
  it('publish button disabled if comment is empty', () => {
    cy.visit('../../lightbox.html')



  })
  
  it('comment hiding works', () => {
    cy.visit('../../lightbox.html')



  })
  
  it('comment counter is updated and displays comments in lightbox and overay', () => {
    cy.visit('../../lightbox.html')



  })
  
  it('comment updated to plural if there is multiple comments', () => {
    cy.visit('../../lightbox.html')



  })
  
  it('comment supression works', () => {
    cy.visit('../../lightbox.html')



  })
  
})