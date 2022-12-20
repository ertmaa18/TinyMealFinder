describe("bauch spec", () => {
  it("is visible", () => {
    cy.visit("http://localhost:3000");
  });

  it("input possible", () => {
    cy.get("input").type("Max was here");
    cy.contains("Add Todo").click();
  });

  it("check checkbox", () => {
    cy.get("label input").check();
  });
});
