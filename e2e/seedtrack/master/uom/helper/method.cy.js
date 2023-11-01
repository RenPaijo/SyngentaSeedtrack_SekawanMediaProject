import { Locator } from "./locator.cy";
import { generateString } from "./random.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx'
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx'
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf'

const randstring = generateString(4);
const randomstring = `${randstring}`;

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get('div[class="h-fit"]').contains('Unit of Measurement').should('be.exist');
    cy.get(locator.inputSearch).click().type('Hectares');
    cy.get(locator.tableUom).should('contain', 'Hectares');
    cy.get(locator.tableUom).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputSelect).contains('Choose Type').click({force: true});
    cy.get(locator.selectDropdown).contains('Area').click();

    cy.get(locator.inputCode).type(randomstring);
    cy.get(locator.inputName).type('Nanometre');
  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('Area').should('be.exist');

    cy.get(locator.inputCode).should('have.value', randomstring);
    cy.get(locator.inputName).should('have.value', 'Nanometre');
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
    cy.get(locator.tableUom).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Nanometre')
    .and('contain', 'Area');
  }

  checkEmptyWarning() {
    cy.contains('Measurement Type is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.contains('Code is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.inputSelect).contains('Choose Type').should('be.exist');

    cy.get(locator.inputCode).should('have.value', '');
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
    cy.get(locator.inputSearch).click().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableUom).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.valueSelect).contains('Area').click({force: true});
    cy.get(locator.selectDropdown).contains('Volume').click();

    cy.get(locator.inputCode).type('-M');
    cy.get(locator.inputName).clear().type('Kubus');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableUom).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Kubus')
    .and('contain', 'Volume');
  }

  confirmDeleteData() {
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.buttonBtn).contains('Yes, sure').click();
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableUom).should('not.contain', randomstring);
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
    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Area').and('contain', '1');
    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Volume').and('contain', '1');

    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'G').and('contain', '1');
    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Mg').and('contain', '1');

    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Gram').and('contain', '1');
    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Miligram').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
