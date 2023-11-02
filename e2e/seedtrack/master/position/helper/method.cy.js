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
    cy.get(locator.inputSearch).click().type('FQS');
    cy.get(locator.tablePosition).should('contain', 'FQS');
    cy.get(locator.tablePosition).find(locator.rowTable).should('have.length', 1);
  }

  searchUnexistData() {
    cy.get(locator.inputSearch).click().type('no data');
    cy.get(locator.tablePosition).should('not.contain', 'No Data Available');
    cy.get(locator.tablePosition).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputCode).type(randomstring);
    cy.get(locator.inputName).type('Field Administrator');
    
    cy.get(locator.valueSelect).contains('Choose Position Country').click({force: true});
    cy.get(locator.selectDropdown).contains('Thailand').first().click();
  }

  checkValueInputForm() {
    cy.get(locator.inputCode).should('have.value', randomstring);
    cy.get(locator.inputName).should('have.value', 'Field Administrator');
    cy.get(locator.valueSelect).contains('Thailand').should('be.exist');
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
    cy.get(locator.tablePosition).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Field Administrator');
  }

  checkEmptyWarning() {
    cy.contains('Name is required').should('be.visible');
    cy.contains('Code is required').should('be.visible');
    cy.contains('Country is required').should('be.visible');
  }

  clearAnInput() {
    cy.get(locator.inputName).clear()
    cy.get(locator.genericBtn).contains('Save').click();
    cy.contains('Name is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.inputCode).should('have.value', '');
    cy.get(locator.inputName).should('have.value', '');
    cy.get(locator.valueSelect).contains('Choose Position Country').should('be.exist');
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
    cy.get(locator.tablePosition).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.inputCode).type('-M');
    cy.get(locator.inputName).clear().type('Field Engineer');
    
    cy.get(locator.valueSelect).contains('Thailand').click({force: true});
    cy.get(locator.selectDropdown).contains('Malaysia').first().click();
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tablePosition).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Field Engineer');
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
    cy.get(locator.tablePosition).should('not.contain', randomstring);
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
    cy.get(locator.tableHeader).contains('Position Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Area Production Manager').and('contain', '1');
    cy.get(locator.tableHeader).contains('Position Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Manager Field').and('contain', '1');

    cy.get(locator.tableHeader).contains('Position Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'APM').and('contain', '1');
    cy.get(locator.tableHeader).contains('Position Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'MF').and('contain', '1');

    cy.get(locator.tableHeader).contains('Position Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2').and('contain', '1');
    cy.get(locator.tableHeader).contains('Position Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
