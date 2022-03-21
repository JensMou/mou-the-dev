describe("First test", function () {
  it("Home", function () {
    cy.visit("http://localhost:3000/");
    cy.get("img[alt^='Profile avatar of me']").first();
  });
});
