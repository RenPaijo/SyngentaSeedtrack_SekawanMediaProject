import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx';
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx';
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf';

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('Indonesia');
    cy.get(locator.tableStorage).should('contain', 'Indonesia');
    cy.get(locator.tableStorage).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.valueSelect).contains('MASTER_STORAGE_COLOR.trans-form-placeholder-storage-color-country').click({force: true});
    cy.get(locator.selectDropdown).contains('Indonesia').click();
    
    cy.get(locator.valueSelect).contains('MASTER_STORAGE_COLOR.trans-form-placeholder-storage-color-status').click({force: true});
    cy.get(locator.selectDropdown).contains('Active').click();
  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('Indonesia').should('be.exist');
    cy.get(locator.valueSelect).contains('Active').should('be.exist');
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
    cy.get(locator.tableStorage).should('contain', 'Indonesia');
    cy.contains('Indonesia').parent(locator.rowTable).should('contain', 'Active')
  }

  checkEmptyWarning() {
    cy.contains('Country is required').should('be.visible');
    cy.contains('Status is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('MASTER_STORAGE_COLOR.trans-form-placeholder-storage-color-country').should('be.exist');
    cy.get(locator.valueSelect).contains('MASTER_STORAGE_COLOR.trans-form-placeholder-storage-color-status').should('be.exist');
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
    cy.get(locator.inputSearch).click().type('Indonesia');
    cy.wait(1000);
    cy.get(locator.tableStorage).should('contain', 'Indonesia');
    cy.contains('Indonesia').parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.valueSelect).contains('Indonesia').click({force: true});
    cy.get(locator.selectDropdown).contains('Malaysia').click();

    cy.get(locator.valueSelect).contains('Active').click({force: true});
    cy.get(locator.selectDropdown).contains('Inactive').click();
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('Indonesia');
    cy.wait(1000);
    cy.get(locator.tableStorage).should('contain', 'Indonesia');
    cy.contains('Indonesia').parent(locator.rowTable).should('contain', 'Inactive');
  }

  confirmDeleteData() {
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.buttonBtn).contains('Yes, sure').click();
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('Indonesia');
    cy.wait(1000);
    cy.get(locator.tableStorage).should('not.contain', 'Indonesia');
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
    cy.get(locator.tableHeader).contains('Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Indonesia').and('contain', '1');
    cy.get(locator.tableHeader).contains('Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Indonesia').and('contain', '1');

    cy.get(locator.tableHeader).contains('Status').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Active').and('contain', '1');
    cy.get(locator.tableHeader).contains('Status').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Active').and('contain', '1');
  }

  clickFilterBtn() {
    cy.get(locator.buttonBtn).contains('Filter').click();
  }

  filterInputAction() {
    cy.get(locator.inputCode).eq(0).type('CBG').should('have.value', 'CBG');
    cy.get(locator.inputName).eq(0).type('Cabbage').should('have.value', 'Cabbage');
  }

  filterSearchAction() {
    cy.get(locator.submitBtn).contains('Search').click();
    cy.get(locator.tableCrops).should('contain', 'CBG');
    cy.contains('CBG').parent(locator.rowTable).should('contain', 'Cabbage');
    cy.get(locator.tableCrops).find(locator.rowTable).should('have.length', 2);
  }

  filterDownloadAction() {
    cy.get(locator.submitBtn).contains('Download').click();
    cy.verifyDownload('.xlsx', { contains: true });
  }

  filterResetAction() {
    cy.get(locator.buttonBtn).contains('Reset').click();
    cy.get(locator.inputCode).eq(0).should('have.value', '');
    cy.get(locator.inputName).eq(0).should('have.value', '');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
