import { Locator } from "./locator.cy";
import { generateString } from "./random.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx';
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx';
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf';

const randstring = generateString(4);
const randomstring = `${randstring}`;

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('NK007');
    cy.get(locator.tableVariety).should('contain', 'NK007');
    cy.get(locator.tableVariety).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.valueSelect).contains('trans-form-placeholder-crops-type-code').click({force: true});
    cy.get(locator.selectDropdown).contains('RC').click();

    cy.get(locator.inputNumber).type('2');
    cy.get(locator.inputCode).type(randomstring);
    cy.get(locator.inputName).type('Rice Variant');
  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('RC').should('be.exist');

    cy.get(locator.inputNumber).should('have.value', '2');
    cy.get(locator.inputCode).should('have.value', randomstring);
    cy.get(locator.inputName).should('have.value', 'Rice Variant');
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
    cy.get(locator.tableVariety).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'RC')
    .and('contain', '2').and('contain','Rice Variant');
  }

  checkEmptyWarning() {
    cy.contains('Crop Type is required').should('be.visible');
    cy.contains('Variety Number is required').should('be.visible');
    cy.contains('Variety Code is required').should('be.visible');
    cy.contains('Variety Name is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('trans-form-placeholder-crops-type-code').should('be.exist');

    cy.get(locator.inputNumber).should('have.value', '');
    cy.get(locator.inputName).should('have.value', '');
    cy.get(locator.inputCode).should('have.value', '');
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
    cy.get(locator.tableVariety).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.valueSelect).contains('RC').click({force: true});
    cy.get(locator.selectDropdown).contains('WORTEL').click();

    cy.get(locator.inputNumber).clear().type('1');
    cy.get(locator.inputCode).type('-M');
    cy.get(locator.inputName).type('Wortel Raksasa');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableVariety).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', '1')
    .and('contain', 'WORTEL').and('contain', 'Wortel Raksasa');
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
    cy.get(locator.tableVariety).should('not.contain', randomstring);
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
    cy.get(locator.tableHeader).contains('Crops Type Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'AAA').and('contain', '1');
    cy.get(locator.tableHeader).contains('Crops Type Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'WONOKROMO').and('contain', '1');

    cy.get(locator.tableHeader).contains('Variety Number').click();
    cy.get(locator.rowTable).eq(1).should('contain', '7').and('contain', '1');
    cy.get(locator.tableHeader).contains('Variety Number').click();
    cy.get(locator.rowTable).eq(1).should('contain', '9').and('contain', '1');

    cy.get(locator.tableHeader).contains('Variety Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Variety Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1');

    cy.get(locator.tableHeader).contains('Variety Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Variety Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
