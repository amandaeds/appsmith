/// <reference types="Cypress" />

const dsl = require("../../../../fixtures/formInputTableV2Dsl.json");
const publish = require("../../../../locators/publishWidgetspage.json");
const testdata = require("../../../../fixtures/testdata.json");
var appId = " ";

describe("Binding the table widget and input Widget", function() {
  before(() => {
    appId = localStorage.getItem("applicationId");
    cy.log("appID:" + appId);
    cy.addDsl(dsl, appId);
  });

  it("1. Input widget test with default value from table widget v2", function() {
    cy.SearchEntityandOpen("Input1");
    cy.testJsontext("defaultvalue", testdata.defaultInputWidget + "}}");
    cy.wait("@updateLayout").should(
      "have.nested.property",
      "response.body.responseMeta.status",
      200,
    );
  });

  it("2. validation of data displayed in input widgets based on selected row", function() {
    cy.SearchEntityandOpen("Table1");
    cy.testJsontext("defaultselectedrow", "2");
    cy.readTableV2dataPublish("2", "0").then((tabData) => {
      const tabValue = tabData;
      expect(tabValue).to.be.equal("6788734");
      cy.log("the value is" + tabValue);
      cy.get(publish.inputWidget + " " + "input")
        .first()
        .invoke("attr", "value")
        .should("contain", tabValue);
    });
  });
});
