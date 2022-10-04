const commonlocators = require("../../../../locators/commonlocators.json");
const formWidgetsPage = require("../../../../locators/FormWidgets.json");
const dsl = require("../../../../fixtures/Invalid_binding_dsl.json");
const pages = require("../../../../locators/Pages.json");
const widgetsPage = require("../../../../locators/Widgets.json");
const publish = require("../../../../locators/publishWidgetspage.json");
const testdata = require("../../../../fixtures/testdata.json");
var appId = " ";

describe("Binding the multiple widgets and validating default data", function () {
  before(() => {
    appId = localStorage.getItem("applicationId");
    cy.log("appID:" + appId);
    cy.addDsl(dsl, appId);
  });

  it("Dropdown widget test with invalid binding value", function () {
    cy.openPropertyPane("selectwidget");
    cy.testJsontext("options", JSON.stringify(testdata.defaultdataBinding));
    cy.evaluateErrorMessage(testdata.dropdownErrorMsg);
  });

  it("Table widget test with invalid binding value", function () {
    cy.openPropertyPane("tablewidget");
    cy.testJsontext("tabledata", JSON.stringify(testdata.defaultdataBinding));
    cy.evaluateErrorMessage(testdata.tableWidgetErrorMsg);
  });
});
