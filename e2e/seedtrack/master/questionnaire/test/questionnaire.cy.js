import { Step } from "../helper/stepQ.cy";

const step = new Step();

describe('Master Questionnaire', () => {
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
        cy.visit("https://portal-syn-seedtrack.skwn.dev/master/questionnaire");
    });

    describe('Questionnaire', () => {
        it('Tambah data valid', () => {
            step.SYNST_MQ_012();
        });

        // it.skip('Validasi inputan sama dengan yang di tampilkan', () => {
        //     step.SYNST_MQ_022();
        // });
    
        // it('Tambah data tanpa input di form', () => {
        //     step.SYNST_MQ_013();    
        // });

        // it.skip('Edit data valid', () => {
        //     step.SYNST_MQ_014();
        // });

        // it('Edit data invalid', () => {
        //     step.SYNST_MQ_015();
        // });

        // it('Search data dengan valid', () => {
        //     step.SYNST_MQ_016();
        // });

        // it('Search data yang tidak ada di list tabel', () => {
        //     step.SYNST_MQ_017();
        // });

        // it('Refresh table', () => {
        //     step.SYNST_MQ_018();
        // });

        // it.skip('Delete data', () => {
        //     step.SYNST_MQ_019();
        // });

        // it('Pagination table', () => {
        //     step.SYNST_MQ_020();
        // });

        // it('Sorting Table', () => {
        //     step.SYNST_MQ_021();
        // });
    });
})