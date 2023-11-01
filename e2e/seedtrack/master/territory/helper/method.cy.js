import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx'
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx'
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf'


export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get('div[class="h-fit"]').contains('Master Territory').should('be.exist');
    cy.get(locator.inputSearch).click().type('SBY');
    cy.get(locator.tableTerritory).should('contain', 'SBY');
    cy.get(locator.tableTerritory).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
    cy.get(locator.modalTitleAdd).contains('Create Form Master Territory').should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputSelect).contains('Choose Parent').eq(0).click({force: true});
    cy.get(locator.selectDropdown).contains('East Java').click();
    
    cy.get(locator.inputSelect).contains('Choose Parent').eq(0).click({force: true});
    cy.get(locator.selectDropdown).contains('Singapura').click();

    cy.get(locator.inputCode).type('JTB');
    cy.get(locator.inputName).type('Jawa Timur Barat');
    cy.get(locator.inputType).type('1');
  }

  checkValueInputForm() {
    cy.get(locator.inputCode).should('have.value', 'JTB');
    cy.get(locator.inputName).should('have.value', 'Jawa Timur Barat');
    cy.get(locator.inputType).should('have.value', '1');

    cy.get(locator.valueSelect).contains('East Java').should('be.exist');
    cy.get(locator.valueSelect).contains('Singapura').should('be.exist');
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
    cy.get(locator.tableTerritory).should('contain', 'JTB');
    cy.contains('JTB').parent(locator.rowTable).should('contain', 'Singapura')
    .and('contain', 'Jawa Timur Barat').and('contain', '1').and('contain', 'East Java');
  }

  checkEmptyWarning() {
    cy.contains('Country is required').should('be.visible');
    cy.contains('Parent Territory is required').should('be.visible');
    cy.contains('Territory Code is required').should('be.visible');
    cy.contains('Territory Type is required').should('be.visible');
    cy.contains('Territory Name is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.inputSelect).contains('Choose Parent').eq(0).should('be.exist')
    .click({force: true});
    cy.get(locator.inputSelect).contains('Choose Parent').eq(0).should('be.exist')

    cy.get(locator.inputCode).should('have.value', '');
    cy.get(locator.inputName).should('have.value', '');
    cy.get(locator.inputType).should('have.value', '');
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
    cy.get(locator.inputSearch).click().type('JTB');
    cy.wait(1000);
    cy.get(locator.tableTerritory).should('contain', 'JTB');
    cy.contains('JTB').parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.valueSelect).contains('East Java').click({force: true});
    cy.get(locator.selectDropdown).contains('East Java').click();
    
    cy.get(locator.valueSelect).contains('Singapura').click({force: true});
    cy.get(locator.selectDropdown).contains('Singapura').click();

    cy.get(locator.inputCode).type('B');
    cy.get(locator.inputName).clear().type('Jawa Timur - Bali dan Bengkulu');
    cy.get(locator.inputType).clear().type('3');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('JTBB');
    cy.wait(1000);
    cy.get(locator.tableTerritory).should('contain', 'JTBB');
    cy.contains('JTBB').parent(locator.rowTable).should('contain', 'Singapura')
    .and('contain', 'Jawa Timur - Bali dan Bengkulu').and('contain', '3').and('contain', 'East Java');
  }

  confirmDeleteData() {
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.buttonBtn).contains('Yes, sure').click();
    cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('JTB');
    cy.wait(1000);
    cy.get(locator.tableTerritory).should('not.contain', 'JTB');
  }

  checkPagination() {
    cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
    cy.get(locator.paginationDesc).should('contain', 'Show 2-10')
  }

  confirmFailedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Failed to save data');
    cy.get(locator.buttonBtn).contains('Oke').click();
    cy.get(locator.tableTerritory).should('contain', 'JTB');
    cy.contains('JTB').parent(locator.rowTable).should('contain', 'Singapura')
    .and('contain', 'Jawa Timur Barat').and('contain', '1').and('contain', 'East Java');
  }

  sortingData() {
    cy.get(locator.tableHeader).contains('Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'English').and('contain', '1');
    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'BGR').and('contain', '1');
    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'bekasi').and('contain', '1');
    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'bekasi').and('contain', '1');
    cy.get(locator.tableHeader).contains('trans-table-header-parent').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'East Java').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
