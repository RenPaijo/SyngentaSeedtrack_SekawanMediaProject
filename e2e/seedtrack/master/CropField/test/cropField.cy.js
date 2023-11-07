import { Step } from "../helper/step.cy";

const step = new Step();

describe('Seed Production Planning', () => {
    beforeEach("passes", () => {
        cy.viewport(1366, 768);
        cy.visit("https://portal-syn-seedtrack.skwn.dev/");
        cy.session("Crops", () => {
          cy.request({
            method: "POST",
            url: "https://api-syn-seedtrack.skwn.dev/api/login",
            body: {
              UserEmail: "shevaathalla@gmail.com",
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
        cy.visit("https://portal-syn-seedtrack.skwn.dev/master/crops-field");
    });

    it('Search data valid', () => {
        step.SYNST_SSP_001();
    });

    it('Search dengan data yang tidak ada di list table', () => {
        step.SYNST_SSP_002();
    });

    it('Refresh', () => {
        step.SYNST_SSP_003();
    });

    it('Pagination table', () => {
        step.SYNST_SSP_004();
    });

    it('Filter Column', () => {
        step.SYNST_SSP_005();
    });

    it('sorting table', () => {
        step.SYNST_SSP_006();
    });

    it.skip('Add data valid', () => {
        step.SYNST_SSP_007();
    });

    it('Add data no input', () => {
        step.SYNST_SSP_008();
    });

    it('Edit data valid', () => {
        step.SYNST_SSP_009();
    });

    it('Edit data invalid', () => {
        step.SYNST_SSP_010();
    });

    it.skip('delete data', () => {
        step.SYNST_SSP_011();
    });
})