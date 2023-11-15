import { Step } from "../helper/step.cy";

const step = new Step();

describe("Master Crops", () => {
  beforeEach("passes", () => {
    cy.viewport(1366, 768);
    cy.visit("https://portal-syn-seedtrack.skwn.dev/");
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
    cy.visit("https://portal-syn-seedtrack.skwn.dev/master/crops-config-user-countries");
  });

  it("Validasi search data", () => {
    step.SYNST_MMCUC_001();
  });

  it("Validasi tambah data config user countries baru", () => {
    step.SYNST_MMCUC_002();
  });

  it("Validasi tambah data config user countries baru tanpa mengisi input data", () => {
    step.SYNST_MMCUC_003();
  });

  it("Validasi keluar form tambah data kemudian masuk ke form tambah kembali", () => {
    step.SYNST_MMCUC_004();
  });

  it("Validasi edit data master config user countries", () => {
    step.SYNST_MMCUC_005();
  });

  it("Validasi hapus data master config user countries", () => {
    step.SYNST_MMCUC_006();
  });

  it.skip("Validasi pagination", () => {
    step.SYNST_MMCUC_007();
  });

  it.skip("Validasi insert sintaks html di form", () => {
    step.SYNST_MMCUC_008();
  });

  it.skip("Validasi sorting data", () => {
    step.SYNST_MMCUC_009();
  });
  
  it.skip("Validasi refresh menu master config user countries", () => {
    step.SYNST_MMCUC_010();
  });

  it("Validasi hapus pilihan di input select sewaktu edit data", () => {
    step.SYNST_MMCUC_011();
  });

  it.skip("Validasi penulisan dan informasi yang disampaikan di form tambah/edit sudah sesuai", () => {
    step.SYNST_MMCUC_012();
  });


});
