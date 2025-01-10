describe('Test login - Github Actions', () => {
  it('Login - Automated Test', () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/")
    cy.get("#username").clear().type("student")
    cy.get("#password").clear().type("Password123")
    cy.get("#submit").click()
    cy.get('#loop-container > div > article > div.post-header > h1').should('be.visible').should('have.text', 'Logged In Successfully');
  })
})