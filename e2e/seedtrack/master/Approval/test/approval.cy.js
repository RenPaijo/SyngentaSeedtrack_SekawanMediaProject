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
        cy.visit("https://portal-syn-seedtrack.skwn.dev/master/approval");
    });

    it('Search valid', () => {
        step.SYNST_SSP_001();
    });

    it('Search dengan data yang tidak ada di list tabel', () => {
        step.SYNST_SSP_002();
    });

    it('Refresh Table', () => {
        step.SYNST_SSP_003();
    });

    it('Pagination', () => {
        step.SYNST_SSP_004();
    });

    it('Export PDF', () => {
        step.SYNST_SSP_005();
    });

    it('Export CSV', () => {
        step.SYNST_SSP_005_1();
    });

    it('Filter column table', () => {
        step.SYNST_SSP_006();
    });

    it('Filter menu reset', () => {
        step.SYNST_SSP_007();
    });

    it('Filter menu download', () => {
        step.SYNST_SSP_008();
    });

    it('Filter menu search', () => {
        step.SYNST_SSP_009();
    });

    it('Sorting table', () => {
        step.SYNST_SSP_010();
    });

    it('Add data valid', () => {
        step.SYNST_SSP_011();
    });

    it('Add data no input', () => {
        step.SYNST_SSP_012();
    });

    it.skip('Edit data valid', () => {
        step.SYNST_SSP_013();
    });

    it('Edit data invalid', () => {
        step.SYNST_SSP_014();
    });

    it('Delete data', () => {
        step.SYNST_SSP_015();
    });
})