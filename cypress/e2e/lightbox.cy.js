describe('lightbox spec', () => {
  it('lightbox opens when clicking on image', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Clicking on image then checking visibility
    cy.get('[data-cy="lightbox"').should('be.visible')



  })
  
  it('lightbox closes when clicking outside lightbox', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Clicking on image, then outside and checking visibility
    cy.get('body').click(0,0)
    cy.get('[data-cy="lightbox"').should('not.be.visible')


  })
  
  it('like counter updates in the overlay and in the lightbox when liking', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Clicking and adding a like, then checking both counters
    cy.get('[data-cy="likebuttonempty"]').click()
    cy.get('[data-cy="likescount-lightbox"]').should('have.text',"1")
    cy.get('body').click(0,0)
    cy.get('[data-cy="likescount-overlay"]').should('have.text',"1")

  })
  
  it('like counter updates in the overlay and in the lightbox when removing like', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Adding a like
    cy.get('[data-cy="likebuttonempty"]').click()
    cy.get('body').click(0,0)
    
    cy.get('[data-cy="image"]').click() // Removing and checking both counters
    cy.get('[data-cy="likebuttonfull"]').click()
    cy.get('[data-cy="likescount-lightbox"]').should('have.text',"0")
    cy.get('body').click(0,0)
    cy.get('[data-cy="likescount-overlay"]').should('have.text',"0")

  })
  
  it('comment list updates and displays the new comment when a comment is added', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Opening lightbox, then adding comment
    cy.get('[data-cy="commentbar"]').type("Awesome !")
    cy.get('[data-cy="publish"]').click() // Clicking the publish button and checking for the comment
    cy.get('[data-cy="comment"]').should('have.text',"Awesome !")



  })
  
  it('publish button disabled if comment is empty', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Opening lightbox, then checking publish button
    cy.get('[data-cy="publish"]').should('be.disabled')


  })
  
  it('comment hiding works', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Opening lightbox, then adding comments
    cy.get('[data-cy="commentbar"]').type("Awesome !")
    cy.get('[data-cy="publish"]').click() 
    cy.get('[data-cy="commentbar"]').type("Nice shot.")
    cy.get('[data-cy="publish"]').click() // Comments added
    cy.get('[data-cy="hidecomments"]').click()
    cy.get('[data-cy="comment"').should('not.be.visible')


  })
  
  it('comment counter is updated and displays comments in lightbox and overay', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Opening lightbox, then adding comment
    cy.get('[data-cy="commentbar"]').type("Awesome !")
    cy.get('[data-cy="publish"]').click() // Clicking the publish button and checking for the comment in lightbox and overlay
    cy.get('[data-cy="hidecomments"]').should('have.text',"Hide 1 comment")
    cy.get('body').click(0,0)
    cy.get('[data-cy="commentscount"]').should('have.text',"1")

  })
  
  it('comment updated to plural if there is multiple comments', () => {
    cy.visit('../../lightbox.html')

    cy.get('[data-cy="image"]').click() // Opening lightbox, then adding comments
    cy.get('[data-cy="commentbar"]').type("Awesome !")
    cy.get('[data-cy="publish"]').click() 
    cy.get('[data-cy="commentbar"]').type("Nice shot.")
    cy.get('[data-cy="publish"]').click() // Comments added, checking plural
    cy.get('[data-cy="hidecomments"]').should('have.text',"Hide 2 comments")


  })
  
  it('comment supression works', () => {
    cy.visit('../../lightbox.html')


    cy.get('[data-cy="image"]').click() // Opening lightbox, then adding comments
    cy.get('[data-cy="commentbar"]').type("Awesome !")
    cy.get('[data-cy="publish"]').click() 
    cy.get('[data-cy="commentbar"]').type("Nice shot.")
    cy.get('[data-cy="publish"]').click() 
    cy.get('[data-cy="commentbar"]').type("Oakland ?")
    cy.get('[data-cy="publish"]').click() // Comments added, deleting comment and checking length
    cy.get('[data-cy="deletecomment"]').eq(2).click()
    cy.get('[data-cy="comment"]').should('have.length',2)
    
  })
  
})