describe("Meal finder ", () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000");
  });

  it("should allow text input", () => {
    cy.get("input").type("Spagettie");
    cy.contains("Search").click();
  });
});
