/// <reference types="Cypress" />

import {baseURL} from '../../../cypress.json';

context('Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Test the Project', () => {
    // Input the username in the input field.
    cy.get("#username").type('admin');
    cy.get(".login_btn").click();

    // Check the Api of the getting all todos
    cy.request(baseURL + 'todos').its('headers')
      .its('content-type')
      .should('include', 'application/json')
    
    cy.request(baseURL + 'todos').its('status')
      .should('equal',200);

    // Check if the url includes the 'todos'
    cy.location('pathname').should('include', 'todos');

    // Check if the Navbar include the 'TEST PROJECT'
    cy.contains('TEST PROJECT').should('be.visible');

    // Check if go to the todo item detail page
    cy.get(".MuiGrid-root > a > div").eq(2).click();
    
    // Check the Api of the getting todo item by the Id
    cy.request(baseURL + 'todos/3').its('headers')
      .its('content-type')
      .should('include', 'application/json')
    
    cy.request(baseURL + 'todos').its('status')
      .should('equal', 200);

    // Check the title of the todo item
    cy.contains("fugiat veniam minus").should('be.visible');

    // Check the Navbar link to going to todo list page      
    cy.get(".MuiToolbar-root > nav > button").click();
    cy.location('pathname').should('include', 'todos');
    cy.contains("Todo's List").should('be.visible');
    
    // Check to log out
    cy.contains("Log out").click();
    
    // Check to going to login page after log out
    cy.contains("Sign in").should('be.visible');
  })

})
  