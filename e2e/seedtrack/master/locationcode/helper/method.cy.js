import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx'
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx'
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf'


export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('WONOKROMO');
    cy.get(locator.tableLocationCode).should('contain', 'WONOKROMO');
    cy.get(locator.tableLocationCode).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputName).type('KOTA');

    cy.get(locator.valueSelect).contains('Choose Location Code Territory').click({force: true});
    cy.get(locator.selectDropdown).contains('surabaya').click();

    cy.get(locator.valueSelect).contains('Choose Location Code Crop Cycle').click({force: true});
    cy.get(locator.selectDropdown).contains('Code').click();
  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('surabaya').should('be.exist');
    cy.get(locator.valueSelect).contains('Code').should('be.exist');

    cy.get(locator.inputName).should('have.value', 'KOTA');
  }

  submitForm() {
    cy.get(locator.form).find(locator.genericBtn).contains('Save').click();
  }

  confirmAddForm() {
    cy.get(locator.modalCon).find(locator.modalConBody).should('contain', 'Are you sure want to save data?')
    cy.get(locator.submitBtn).contains('Confirm').click();
  }

  confirmSavedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been saved');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkSavedData() {
    cy.get(locator.tableLocationCode).should('contain', 'KOTA');
    cy.contains('KOTA').parent(locator.rowTable).should('contain', '9')
    .and('contain', '2');
  }

  checkEmptyWarning() {
    cy.contains('Name is required').should('be.visible');
    cy.contains('Territory is required').should('be.visible');
    cy.contains('Crop Cycle is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('Choose Location Code Territory').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Location Code Crop Cycle').should('be.exist');

    cy.get(locator.inputName).should('have.value', '');
  }

  clickDownloadBtn() {
    cy.get(locator.buttonBtn).contains('Template').click();
    cy.verifyDownload('.xlsx', { contains: true }, {timeout: 10000});
  }

  clickImportBtn() {
    cy.get(locator.buttonBtn).contains('Import').click();
    cy.get(locator.modalTitleImport).should('be.visible');
  }

  uploadImportBtn() {
    cy.get(locator.buttonBtn).contains('Upload').click();
  }

  importOtherXlsx() {
    cy.get(locator.importFile).selectFile(nonTemplateXlsxPath);
  }

  importUnsupportedFile() {
    cy.get(locator.importFile).selectFile(unsupportedPath);
  }

  checkModalError() {
    cy.contains('Import Data Failed!').should('be.visible');
  }

  selectData() {
    cy.get(locator.inputSearch).click().type('KOTA');
    cy.wait(1000);
    cy.get(locator.tableLocationCode).should('contain', 'KOTA');
    cy.contains('KOTA').parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.valueSelect).contains('surabaya').click({force: true});
    cy.get(locator.selectDropdown).contains('Maninjau').click();

    cy.get(locator.valueSelect).contains('Code').click({force: true});
    cy.get(locator.selectDropdown).contains('Test').click();

    cy.get(locator.inputName).clear().type('KOTABARU');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('KOTABARU');
    cy.wait(1000);
    cy.get(locator.tableLocationCode).should('contain', 'KOTABARU');
    cy.contains('KOTABARU').parent(locator.rowTable).should('contain', '9')
    .and('contain', '1');
  }

  confirmDeleteData() {
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.buttonBtn).contains('Yes, sure').click();
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('KOTA');
    cy.wait(1000);
    cy.get(locator.tableLocationCode).should('not.contain', 'KOTA');
  }

  checkPagination() {
    cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
    cy.get(locator.paginationDesc).should('contain', 'Show 2-10')
  }

  confirmFailedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Failed to save data');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  sortingData() {
    cy.get(locator.tableHeader).contains('Location Code Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'AAA').and('contain', '1');
    cy.get(locator.tableHeader).contains('Location Code Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'WONOKROMO').and('contain', '1');

    cy.get(locator.tableHeader).contains('Location Code Territory').click();
    cy.get(locator.rowTable).eq(1).should('contain', '7').and('contain', '1');
    cy.get(locator.tableHeader).contains('Location Code Territory').click();
    cy.get(locator.rowTable).eq(1).should('contain', '9').and('contain', '1');

    cy.get(locator.tableHeader).contains('Location Code Crop Cycle').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Location Code Crop Cycle').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
