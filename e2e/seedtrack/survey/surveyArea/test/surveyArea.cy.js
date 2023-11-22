import { Step } from "../helper/step.cy";

const step = new Step();

describe("Master Crops", () => {
  beforeEach("passes", () => {
    cy.viewport(1366, 768);
    cy.visit("https://portal-syn-seedtrack.skwn.dev/");
    cy.session("Crops", () => {
      cy.request({
        method: "POST",
        url: "https://api-syn-seedtrack.skwn.dev/api/login",
        body: {
          UserEmail: "syngentaseedtrack@gmail.com",
          CountryId: 4, 
          CropId: 1,
        },
      }).then((response) => {
        expect(response.status).eq(200);
        let accessToken = response.body.data.token;
        cy.log(accessToken);
        cy.wait(5000);
        cy.setCookie('access_token', accessToken);
        cy.fixture('message').then((data) => {
            window.localStorage.setItem('persist:SeedTrack', JSON.stringify(data));
        });
      });
    });
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://portal-syn-seedtrack.skwn.dev/dashboard");
    cy.get("[placeholder='Search']").type('survey')
    cy.get('button').contains('Survey').click()
    cy.get('p').contains('Survey Area').click()
});

  it('Search valid data', () => {
      step.SYNST_SSA_001();
  });

  // it('Search invalid data', () => {
  //     step.SYNST_SSA_002();
  // });
  
  // it('Check pagination', () => {
  //     step.SYNST_SSA_003();
  // });

  // it('Sorting data', () => {
  //     step.SYNST_SSA_004();
  // });

  // it('Refresh table', () => {
  //     step.SYNST_SSA_005();
  // });

  it('Filter menu reset', () => {
      step.SYNST_SSA_006_1();
  });

  it.skip('Filter menu download', () => {
      step.SYNST_SSA_006_2();
  });

  it('Filter menu search', () => {
      step.SYNST_SSA_006_3();
  });

  // it('Validate history menu', () => {
  //     step.SYNST_SSA_007();
  // });

  it('Filter list table validate', () => {
      step.SYNST_SSA_008();
  });

});
