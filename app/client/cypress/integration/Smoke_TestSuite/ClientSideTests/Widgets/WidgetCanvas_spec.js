const dsl = require("../../../../fixtures/longCanvasDsl.json");
var appId = " ";

describe("reduce long canvas height on widget operation", () => {
  before(() => {
    appId = localStorage.getItem("applicationId");
    cy.log("appID:"+appId);
  });

  beforeEach(() => {
    cy.addDsl(dsl, appId);
  });

  it("should reduce canvas height when a widget is deleted", () => {
    //select a widget
    cy.wait(2000);
    cy.get(`#${dsl.dsl.children[1].widgetId}`).click({
      ctrlKey: true,
    });
    cy.get(`div[data-testid='t--selected']`).should("have.length", 1);

    cy.document().then((doc) => {
      const element = doc.querySelector("#div-selection-0");
      const initialHeight = element.getBoundingClientRect().height;
      //delete widget
      cy.get("body").type(`{del}`);

      //canvas height should be lesser now
      cy.wait(1000).then(() => {
        expect(element.getBoundingClientRect().height).to.be.lessThan(
          initialHeight,
        );
      });
    });
  });
});
