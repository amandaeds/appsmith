const widgetsPage = require("../../../../../locators/Widgets.json");
const dsl = require("../../../../../fixtures/multiSelectedRowUpdationDsl.json");
var appId = " ";

/* 
Selected row stays selected after data updation
if the primary column value isn't updated.
*/
describe("Table Widget row multi select validation", function() {
   before(() => {
    appId = localStorage.getItem("applicationId");
    cy.log("appID:"+appId);
    cy.addDsl(dsl, appId);
  });

  it("Test multi select column shows when enableMultirowselection is true", function() {
    cy.get(widgetsPage.buttonWidget)
      .first()
      .click();
    cy.wait(1000);
    cy.get(".t--table-multiselect")
      .first()
      .click();
    cy.get(widgetsPage.buttonWidget)
      .last()
      .click();
    cy.get(".tbody .tr")
      .first()
      .should("have.class", "selected-row");
  });
});
