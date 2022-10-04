const dsl = require("../../../../fixtures/buttonGroupDsl.json");
const commonlocators = require("../../../../locators/commonlocators.json");
const publishPage = require("../../../../locators/publishWidgetspage.json");
var appId = " ";

describe("Widget Grouping", function() {
  before(() => {
    appId = localStorage.getItem("applicationId");
    cy.log("appID:" + appId);
    cy.addDsl(dsl, appId);
  });
  it("Button widgets widget on click info message valdiation ", function() {
    cy.get(".t--buttongroup-widget button")
      .contains("Add")
      .click({ force: true });
    cy.get(".t--buttongroup-widget button")
      .contains("More")
      .click({ force: true });
    cy.get(commonlocators.toastmsg).contains("test alert");
    cy.PublishtheApp();
    cy.get(".t--buttongroup-widget button")
      .contains("Add")
      .click({ force: true });
    cy.get(".t--buttongroup-widget button")
      .contains("More")
      .click({ force: true });
    cy.get(commonlocators.toastmsg).contains("test alert");
    cy.goToEditFromPublish();
  });
});
