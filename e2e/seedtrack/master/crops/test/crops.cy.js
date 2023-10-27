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
    cy.visit("https://portal-syn-seedtrack.skwn.dev/master/crops");
  });

  it("Validasi import data dengan template dari menu yang lain", () => {
    step.SYNST_MMC_001();
  });

  it("Validasi user ketika upload template yang sesuai tanpa mengisi data", () => {
    step.SYNST_MMC_002();
  });

  it("Validasi kolom pencarian", () => {
    step.SYNST_MMC_003();
  });

  it("Validasi sorting data", () => {
    step.SYNST_MMC_004();
  });

  it("Validasi unduh template", () => {
    step.SYNST_MMC_005();
  });

  it("Validasi buka halaman history", () => {
    step.SYNST_MMC_006();
  });

  it.only("Tambah data lengkap", () => {
    step.SYNST_MMC_007();
  });

  it("Tambah data tanpa mengisi form", () => {
    step.SYNST_MMC_008();
  });

  it("Menonaktifkan data", () => {
    step.SYNST_MMC_009();
  });

  it("Edit nama APM", () => {
    step.SYNST_MMC_010();
  });
});
