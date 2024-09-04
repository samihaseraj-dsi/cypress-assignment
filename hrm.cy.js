describe('template spec', () => {
  
    it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.oxd-button > .oxd-icon').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('sam')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('test')
    cy.get('.oxd-switch-input').click()
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testuser125')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password1234!')
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password1234!')
    cy.get('.oxd-button--secondary').click()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('0378')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
    
  
    
    
   

   

  })
  })
  