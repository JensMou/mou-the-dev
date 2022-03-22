/// <reference types="cypress"/>

describe("Run page", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    cy.pause();
    cy.viewport("iphone-8");
    cy.viewport("ipad-2");
    cy.viewport("macbook-15");
  });
});
