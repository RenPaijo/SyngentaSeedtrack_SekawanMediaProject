import { Locator } from "./locator.cy";
import { generateString } from "./random.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx'
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx'
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf'

const uuid = () => Cypress._.random('^[A-Za-z]+$')
const id = uuid()
const randomid = `${id}`

const randstring = generateString(4);
const randomstring = `${randstring}`;

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get('div[class="h-fit"]').contains('Master Region').should('be.exist');
    cy.get(locator.inputSearch).click().type('APAC');
    cy.get(locator.tableRegion).should('contain', 'APAC');
    cy.get(locator.tableRegion).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputCode).type(randomstring);
    cy.get(locator.inputName).type('Kuwait');
  }

  checkValueInputForm() {
    cy.get(locator.inputCode).should('have.value', randomstring);
    cy.get(locator.inputName).should('have.value', 'Kuwait');
  }

  submitForm() {
    cy.get(locator.form).find(locator.genericBtn).contains('Save').click();
  }

  confirmAddForm() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'trans-modal-message-confirm-create')
    cy.get(locator.submitBtn).contains('Yes, sure').click();
  }

  confirmSavedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data Created Successfully!');
    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'The data has been created');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkSavedData() {
    cy.get(locator.tableRegion).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Kuwait')
  }

  checkEmptyWarning() {
    cy.contains('Name is required').should('be.visible');
    cy.contains('Code is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.inputCode).should('have.value', '');
    cy.get(locator.inputName).should('have.value', '');
  }

  clickDownloadBtn() {
    cy.get(locator.buttonBtn).contains('Template').click();
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
    cy.get(locator.tableRegion).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }
    
  confirmEditForm() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'trans-modal-message-confirm-update')
    cy.get(locator.submitBtn).contains('Yes, sure').click();
  }

  changeValue() {
    cy.get(locator.inputCode).type('M');
    cy.get(locator.inputName).clear().type('Kuwait New');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'The data has been updated!');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableRegion).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Kuwait New');
  }

  confirmDeleteData() {
    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.submitBtn).contains('Yes, sure').click();

    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableRegion).should('not.contain', randomstring);
  }

  checkPagination() {
    cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
    cy.get(locator.paginationDesc).should('contain', 'Show 2-10')
  }

  confirmFailedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Failed Create Data!');
    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'The data failed to create!');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  sortingData() {
    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'APAC').and('contain', '1');
    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Asia Pacific Update').and('contain', '1');
  }

  clickActionBtn() {
    cy.get(locator.buttonBtn).contains('Export').click();
  }

  exportAsPdf() {
    cy.get(locator.exportDropdown).contains('PDF').click();
    cy.verifyDownload('.pdf', { contains: true }, {timeout: 10000});
  }

  exportAsCsv() {
    cy.get(locator.exportDropdown).contains('CSV').click();
    cy.verifyDownload('.csv', { contains: true }, {timeout: 10000});
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
