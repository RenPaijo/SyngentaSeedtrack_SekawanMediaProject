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
    cy.visit("https://portal-syn-seedtrack.skwn.dev/master/module");
  });

  it("Tambah data master module dengan valid", () => {
    step.SYNST_MM_001();
  });

  it("Tambah data master module tanpa input apapun pada field form", () => {
    step.SYNST_MM_002();
  });

  it("Tambah data master module tanpa input di salah satu field yang wajib diisi", () => {
    step.SYNST_MM_003();
  });

  it("Edit data master module yang ada secara valid", () => {
    step.SYNST_MM_004();
  });

  it("Edit data master module dengan mengkosongi salah satu field yang wajib diisi", () => {
    step.SYNST_MM_005();
  });

  it("Hapus salah satu data", () => {
    step.SYNST_MM_006();
  });

  it("Validasi search dengan data valid pada master module", () => {
    step.SYNST_MM_007();
  });

  it("Validasi search dengan data yang tidak ada pada list tabel", () => {
    step.SYNST_MM_008();
  });

  it("Paginasi list tabel)", () => {
    step.SYNST_MM_009();
  });

  it.skip("Validasi button refresh", () => {
    step.SYNST_MM_010();
  });

  it("Validasi sorting pada kolom list tabel", () => {
    step.SYNST_MM_011();
  });

  it.skip("Validasi data yang di inputkan sama dengan yang di tampilkan", () => {
    step.SYNST_MM_012();
  });

  it.skip("Import data pada master module dengan valid", () => {
    step.SYNST_MM_013();
  });

  it("Import data pada master module dengan data invalid", () => {
    step.SYNST_MM_014();
  });

  it("Import data pada master module tanpa melakukan import data", () => {
    step.SYNST_MM_015();
  });
  
  it("Tambah data yang sama dengan yang sudah dihapus", () => {
    step.SYNST_MM_016();
    step.SYNST_MM_006();
    step.SYNST_MM_016();
  });

  it("Validasi keluar form tambah data kemudian masuk ke form tambah kembali", () => {
    step.SYNST_MM_017();
  });

  it("Cleaning Data", () => {
    step.SYNST_MM_006();
  })
});
