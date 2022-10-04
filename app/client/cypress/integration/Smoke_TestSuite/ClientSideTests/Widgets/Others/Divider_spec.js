const dsl = require("../../../../../fixtures/DividerDsl.json");
const explorer = require("../../../../../locators/explorerlocators.json");
var appId = " ";

describe("Divider Widget Functionality", function() {
   before(() => {
    appId = localStorage.getItem("applicationId");
    cy.log("appID:"+appId);
    cy.addDsl(dsl, appId);
  });

  it("Add new Divider", () => {
    cy.get(explorer.addWidget).click();
    cy.dragAndDropToCanvas("dividerwidget", { x: 300, y: 300 });
    cy.get(".t--divider-widget").should("exist");
  });

  it("Open Existing Divider from created Widgets list", () => {
    cy.get("#switcher--explorer").click({ force: true });
    cy.GlobalSearchEntity("Widgets");
    cy.get(".t--entity-name:contains(Divider1)").click();
    cy.get(".t--entity-name:contains(Divider2)").click();
  });
});
