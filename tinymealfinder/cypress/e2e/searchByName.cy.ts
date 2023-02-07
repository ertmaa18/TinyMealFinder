describe("Meal finder ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should be visible", () => {
    cy.visit("http://localhost:3000");
  });

  it("should display details from Spaghetti", () => {
    cy.get('input[type="search"]').type("Spaghetti");
    cy.contains("Search").click();
    cy.get("div").should("have.class", "container");
    cy.contains("Details").click();
    cy.get(".ReactModal__Content");
  });
});
