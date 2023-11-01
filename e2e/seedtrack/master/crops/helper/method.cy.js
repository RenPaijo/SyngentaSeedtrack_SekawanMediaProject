import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx'
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx'
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf'


export class Method {
  // method untuk select master crops
  selectCrops() {
    cy.contains(locator.dataMaster).click();
    cy.contains(locator.btnCrops).click();
  }

  //method untuk aksi search
  searchAction() {
    cy.get('div[class="h-fit"]').contains('Master Crops').should('be.exist');
    cy.get(locator.inputSearch).click().type('RICES');
    cy.get(locator.tableCrops).should('contain', 'RICES');
    cy.get(locator.tableCrops).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
    cy.get(locator.modalTitleAdd).contains('Create Form Master Crops').should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputCode).eq(1).type('CBG').should('have.value', 'CBG');
    cy.get(locator.inputName).eq(1).type('Cabbage').should('have.value', 'Cabbage');
  }

  inputFormAddAfterDelete() {
    cy.get(locator.inputCode).eq(1).type('CBGM').should('have.value', 'CBGM');
    cy.get(locator.inputName).eq(1).type('Cabbage').should('have.value', 'Cabbage');
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
    cy.get(locator.tableCrops).should('contain', 'CBG');
    cy.contains('CBG').parent(locator.rowTable).should('contain', 'Cabbage');
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

  checkEmptyWarning() {
    cy.contains('Crop Code is required').should('be.visible');
    cy.contains('Crop Name is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.inputCode).eq(1).should('have.value', '');
    cy.get(locator.inputName).eq(1).should('have.value', '');
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
    cy.get(locator.inputSearch).click().type('CBG');
    cy.wait(1000);
    cy.get(locator.tableCrops).should('contain', 'CBG');
    cy.contains('CBG').parent(locator.rowTable).find(locator.actionBtn).click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  checkCorrectInputValue() {
    cy.get(locator.inputCode).eq(1).should('have.value', 'CBG');
    cy.get(locator.inputName).eq(1).should('have.value', 'Cabbage');
  }

  changeValue() {
    cy.get(locator.inputCode).eq(1).clear().type('CBGM')
    cy.get(locator.inputName).eq(1).type(' Modified')
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('CBGM');
    cy.wait(1000);
    cy.get(locator.tableCrops).should('contain', 'CBGM');
    cy.contains('CBGM').parent(locator.rowTable).should('contain', 'Cabbage Modified');
  }

  confirmDeleteData() {
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.buttonBtn).contains('Yes, sure').click();
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('CBGM');
    cy.wait(1000);
    cy.get(locator.tableCrops).should('not.contain', 'CBGM');
  }

  confirmFailedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Failed to save data');
    cy.get(locator.buttonBtn).contains('Oke').click();
    cy.get(locator.tableCrops).should('contain', 'CBG');
    cy.contains('CBG').parent(locator.rowTable).should('contain', 'Cabbage');
  }

  sortingData() {
    cy.get(locator.tableHeader).contains('Crops Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'CARROT').and('contain', '1');
    cy.get(locator.tableHeader).contains('Crops Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Carrot update').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
