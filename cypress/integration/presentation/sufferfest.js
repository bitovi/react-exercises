context("Sufferfest Tests", () => {
    beforeEach(() => {
      cy.viewport(1000, 1000)
    })
  
    it("can create a user from the homepage", () => {
       cy.visit("https://thesufferfest.com/")
       cy.contains('Try For Free').click()
       cy.contains('Create Your Account')
        .scrollIntoView({offset: {top: -200, left: 0}})
        .click()
    //    cy.contains('Accept Cookies').click()
       cy.contains('Create an account').click()
       
       cy.get('.name').click().type("Automated Test")
       cy.get('[placeholder="lan.email"] > .email').click().type("test@thesufferfest.com")
       cy.get('#confirm_email > .email').click().type("test@thesufferfest.com")
       cy.get('.password').click().type("wordpass")
       
       cy.get('.password > button.ng-binding').click()
       cy.wait(500)
       cy.get('.password > button.ng-binding').click()

       cy.get(':nth-child(7) > .ng-pristine').click()
       cy.get(':nth-child(8) > .ng-pristine').click()
    })
    // it("let's the user see their password on login page", () => {
    //     cy.visit("https://app.thesufferfest.com/#!/users/login//")
    //     cy.get('.email').click()
    //     cy.get('body').click()
    //     cy.get('.email').click().type("a")
    //     cy.get('body').click()
    //     cy.contains('Please enter a valid email address.').should('be.visible')
    //     cy.get('.email').click().type("{backspace}")
    //     cy.contains('Email field cannot be empty.').should('be.visible')
    //  })
  })
  
