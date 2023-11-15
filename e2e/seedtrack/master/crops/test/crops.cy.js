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
    cy.visit("https://portal-syn-seedtrack.skwn.dev/master/crops");
  });

  it("Validasi search data", () => {
    step.SYNST_MMC_001();
  });

  it("Validasi tambah data crops baru", () => {
    step.SYNST_MMC_003();
  });

  it("Validasi filter data", () => {
    step.SYNST_MMC_002();
  });

  it("Validasi tambah data dengan kode yang sudah ada di datatable", () => {
    step.SYNST_MMC_015();
  });

  it("Validasi tambah data crops baru tanpa mengisi input data", () => {
    step.SYNST_MMC_004();
  });

  it("Validasi keluar form tambah data kemudian masuk ke form tambah kembali", () => {
    step.SYNST_MMC_005();
  });

  it("Validasi download template excel", () => {
    step.SYNST_MMC_006();
  });

  it("Validasi import data dengan file excel non-template", () => {
    step.SYNST_MMC_007();
  });

  it.skip("Validasi user ketika upload template yang sesuai tanpa mengisi data", () => {
    step.SYNST_MMC_008();
  });

  it.skip("Validasi user ketika upload template yang sesuai. Tetapi beberapa kolom required tidak diisi", () => {
    step.SYNST_MMC_009();
  });

  it("Validasi import data dengan file non-excel (ekstensi yang tidak didukung)", () => {
    step.SYNST_MMC_010();
  });

  it("Validasi edit data master crops", () => {
    step.SYNST_MMC_011();
  });

  it("Validasi hapus data master crops", () => {
    step.SYNST_MMC_012();
  });

  it.skip("Validasi pagination", () => {
    step.SYNST_MMC_013();
  });

  it("Validasi insert sintaks html di form", () => {
    step.SYNST_MMC_014();
  });

  it("Validasi sorting data", () => {
    step.SYNST_MMC_016();
  });
  
  it.skip("Validasi refresh menu master crops", () => {
    step.SYNST_MMC_017();
  });

  it.skip("Validasi penulisan dan informasi yang disampaikan di form tambah/edit sudah sesuai", () => {
    step.SYNST_MMC_018();
  });

  it("Cek apakah data sudah benar-benar terhapus atau belum", () => {
    step.SYNST_MMC_019();
  });

  it("Validasi upload file tanpa mengimport file apa-apa", () => {
    step.SYNST_MMC_020();
  });

  it.skip("Validasi penulisan dan informasi yang disampaikan di form import sudah sesuai", () => {
    step.SYNST_MMC_021();
  });

  it("Cleaning Data", () => {
    step.SYNST_MMC_012();
  })
});
