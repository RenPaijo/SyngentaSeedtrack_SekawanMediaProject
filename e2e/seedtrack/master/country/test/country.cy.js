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
    cy.visit("https://portal-syn-seedtrack.skwn.dev/master/countries");
  });

  it("Tambah data master country dengan valid", () => {
    step.SYNST_MC_001();
  });

  it("Tambah data master country tanpa input apapun pada field form", () => {
    step.SYNST_MC_002();
  });

  it("Tambah data master country tanpa input di salah satu field yang wajib diisi", () => {
    step.SYNST_MC_003();
  });

  it("Edit data master country yang ada secara valid", () => {
    step.SYNST_MC_004();
  });

  it("Edit data master country dengan mengkosongi salah satu field yang wajib diisi", () => {
    step.SYNST_MC_005();
  });

  it("Hapus salah satu data", () => {
    step.SYNST_MC_006();
  });

  it("Validasi search dengan data valid pada master country", () => {
    step.SYNST_MC_007();
  });

  it("Validasi search dengan data yang tidak ada pada list tabel", () => {
    step.SYNST_MC_008();
  });

  it.skip("Paginasi list tabel", () => {
    step.SYNST_MC_009();
  });

  it.skip("Validasi button refresh", () => {
    step.SYNST_MC_010();
  });

  it.skip("Import data pada master country dengan valid", () => {
    step.SYNST_MC_011();
  });

  it("Import data pada master country dengan data invalid", () => {
    step.SYNST_MC_012();
  });

  it("Import data pada master country tanpa melakukan import data", () => {
    step.SYNST_MC_013();
  });

  it("Dapat mendownload templete yang sudah disediakan ", () => {
    step.SYNST_MC_014();
  });
  
  it.skip("Validasi data yang ditampilkan pada list tabel sudah sesuai dengan yang sudah ditambahkan", () => {
    step.SYNST_MC_015();
  });

  it("Validasi sorting pada kolom list tabel", () => {
    step.SYNST_MC_016();
  });

  it("Tambah data yang sama dengan yang sudah dihapus", () => {
    step.SYNST_MC_017();
    step.SYNST_MC_006();
    step.SYNST_MC_017();
  });

  it.only("Validasi maksimal field code ≤ 5 karakter", () => {
    step.SYNST_MC_018();
  });

  it("Validasi keluar form tambah data kemudian masuk ke form tambah kembali", () => {
    step.SYNST_MC_019();
  });
});
