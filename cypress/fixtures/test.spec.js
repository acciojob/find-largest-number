describe("test of relative list", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080");
    });
    it("should check body", () => {
      cy.get("body");
    });
  });
