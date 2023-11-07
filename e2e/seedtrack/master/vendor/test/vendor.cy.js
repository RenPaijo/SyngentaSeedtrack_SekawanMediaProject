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
    cy.visit("https://portal-syn-seedtrack.skwn.dev/master/vendor");
  });

  it("Validasi search data", () => {
    step.SYNST_MMVen_001();
  });

  it("Validasi tambah data location code baru", () => {
    step.SYNST_MMVen_002();
  });

  it("Validasi tambah data dengan kode yang sudah ada di datatable", () => {
    step.SYNST_MMVen_014();
  });

  it.only("Validasi tambah data location code baru tanpa mengisi input data", () => {
    step.SYNST_MMVen_003();
  });

  it("Validasi keluar form tambah data kemudian masuk ke form tambah kembali", () => {
    step.SYNST_MMVen_004();
  });

  it("Validasi download template excel", () => {
    step.SYNST_MMVen_005();
  });

  it("Validasi import data dengan file excel non-template", () => {
    step.SYNST_MMVen_006();
  });

  it.skip("Validasi user ketika upload template yang sesuai tanpa mengisi data", () => {
    step.SYNST_MMVen_007();
  });

  it.skip("Validasi user ketika upload template yang sesuai. Tetapi beberapa kolom required tidak diisi", () => {
    step.SYNST_MMVen_008();
  });

  it("Validasi import data dengan file non-excel (ekstensi yang tidak didukung)", () => {
    step.SYNST_MMVen_009();
  });

  it("Validasi edit data master location code", () => {
    step.SYNST_MMVen_010();
  });

  it("Validasi hapus data master location code", () => {
    step.SYNST_MMVen_011();
  });

  it.skip("Validasi pagination", () => {
    step.SYNST_MMVen_012();
  });

  it.skip("Validasi insert sintaks html di form", () => {
    step.SYNST_MMVen_013();
  });

  it.skip("Validasi sorting data", () => {
    step.SYNST_MMVen_015();
  });
  
  it.skip("Validasi refresh menu master location code", () => {
    step.SYNST_MMVen_016();
  });

  it.skip("Validasi penulisan dan informasi yang disampaikan di form tambah/edit sudah sesuai", () => {
    step.SYNST_MMVen_017();
  });

  it("Cek apakah data sudah benar-benar terhapus atau belum", () => {
    step.SYNST_MMVen_018();
    step.SYNST_MMVen_011();
    step.SYNST_MMVen_018();
  });

  it("Validasi upload file tanpa mengimport file apa-apa", () => {
    step.SYNST_MMVen_019();
  });

  it("Cleaning Data", () => {
    step.SYNST_MMVen_011();
  })
});
