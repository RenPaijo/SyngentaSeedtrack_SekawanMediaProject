import { Step } from "../helper/step.cy";

const step = new Step();

describe("Master Crops", () => {
  beforeEach("passes", () => {
    cy.viewport(1366, 768);
    cy.session("Crops", () => {
      cy.api({
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
    cy.visit("https://portal-syn-seedtrack.skwn.dev/");
    cy.visit("https://portal-syn-seedtrack.skwn.dev/master/scoring");
  });

  it("Validasi search data", () => {
    step.SYNST_MSASP_001();
  });

  it("Validasi tambah data scoring parameter baru", () => {
    step.SYNST_MSASP_002();
  });

  it("Validasi tambah data scoring parameter baru tanpa mengisi input data", () => {
    step.SYNST_MSASP_003();
  });

  it("Validasi keluar form tambah data kemudian masuk ke form tambah kembali", () => {
    step.SYNST_MSASP_004();
  });

  it("Validasi edit data master scoring parameter ", () => {
    step.SYNST_MSASP_005();
  });

  it("Validasi hapus data master scoring parameter ", () => {
    step.SYNST_MSASP_006();
  });

  it.skip("Validasi pagination", () => {
    step.SYNST_MSASP_007();
  });

  it.skip("Validasi insert sintaks html di form", () => {
    step.SYNST_MSASP_008();
  });

  it("Validasi sorting data", () => {
    step.SYNST_MSASP_009();
  });

  it.skip("Validasi refresh menu master scoring parameter ", () => {
    step.SYNST_MSASP_010();
  });

  it.only("Validasi hapus pilihan di input select sewaktu edit data", () => {
    step.SYNST_MSASP_011();
  });
});
