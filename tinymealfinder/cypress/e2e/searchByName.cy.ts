describe("Meal finder ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should be visible", () => {
    cy.visit("http://localhost:3000");
  });

  it("should be able to search for Spaghetti", () => {
    cy.get('input[type="search"]').type("Spaghetti");
    cy.get("#searchInput").click();
    cy.get("div").should("have.class", "container");
  });

  it("should display details from Spaghetti", () => {
    cy.get('input[type="search"]').type("Spaghetti");
    cy.get("#searchInput").click();
    cy.get("div").should("have.class", "container");
    cy.contains("See Details")
      .click()
      .get(".ReactModal__Content")
      .should("be.visible");
  });

  it("should go display recipes after search", () => {
    cy.get('input[type="search"]').type("Spaghetti");
    cy.get("#searchInput").click();
    cy.get("div").should("have.class", "container");
    cy.get("#searchInput").click();
    cy.get('input[type="search"]').clear();
    cy.get("#searchInput").click();
    cy.contains("Corba").should("be.visible");
  });
});
