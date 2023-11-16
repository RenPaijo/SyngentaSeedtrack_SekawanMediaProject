import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx';
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx';
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf';

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('123');
    cy.get(locator.tableVendor).should('contain', '123');
    cy.get(locator.tableVendor).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.valueSelect).contains('Choose Territory').click({force: true});
    cy.get(locator.selectDropdown).contains('East Java').click();

    cy.get(locator.valueSelect).contains('Choose Area').click({force: true});
    cy.get(locator.selectDropdown).contains('area').click();

    cy.get(locator.inputCode).eq(1).type('123', {force: true});
    cy.get(locator.inputName).eq(1).type('Vendor Name');
    cy.get(locator.inputDirectorName).type('Dr. Director Name');
    cy.get(locator.inputAddress).type('Jl. Ntah Berantah');
    cy.get(locator.inputPhone).type('085707122492');

  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('East Java').should('be.exist');
    cy.get(locator.valueSelect).contains('area').should('be.exist');

    cy.get(locator.inputCode).eq(1).should('have.value', '123');
    cy.get(locator.inputName).eq(1).should('have.value', 'Vendor Name');
    cy.get(locator.inputDirectorName).should('have.value', 'Dr. Director Name');
    cy.get(locator.inputAddress).should('have.value', 'Jl. Ntah Berantah');
    cy.get(locator.inputPhone).should('have.value', '085707122492');
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
    cy.get(locator.tableVendor).should('contain', '123');
    cy.contains('123').parent(locator.rowTable).should('contain', 'East Java')
    .and('contain', 'area').and('contain','Vendor Name').and('contain','Dr. Director Name')
    .and('contain','Jl. Ntah Berantah').and('contain','085707122492');
  }

  checkEmptyWarning() {
    cy.contains('Code is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.contains('Director Name is required').should('be.visible');
    cy.contains('Address is required').should('be.visible');
    cy.contains('Phone is required').should('be.visible');
    cy.contains('Territory is required').should('be.visible');
    cy.contains('Area is required').scrollIntoView().should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('Choose Territory').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Area').should('be.exist');

    cy.get(locator.inputCode).eq(1).should('have.value', '');
    cy.get(locator.inputName).eq(1).should('have.value', '');
    cy.get(locator.inputDirectorName).should('have.value', '');
    cy.get(locator.inputAddress).should('have.value', '');
    cy.get(locator.inputPhone).should('have.value', '');
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
    cy.get(locator.inputSearch).click().type('123');
    cy.wait(1000);
    cy.get(locator.tableVendor).should('contain', '123');
    cy.contains('123').parent(locator.rowTable).find(locator.actionBtn).first().click();
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
    cy.get(locator.valueSelect).contains('East Java').click({force: true});
    cy.get(locator.selectDropdown).contains('Kota Malang').click();

    cy.get(locator.inputCode).eq(1).clear().type('1234');
    cy.get(locator.inputName).eq(1).type('Vendor Name Modified');
    cy.get(locator.inputDirectorName).type('Dr. Director Name New');
    cy.get(locator.inputAddress).type('Jl. Ujung Dunia');
    cy.get(locator.inputPhone).type('085784861117');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'The data has been updated!');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('123');
    cy.wait(1000);
    cy.get(locator.tableVendor).should('contain', '123');
    cy.contains('123').parent(locator.rowTable).should('contain', 'Kota Malang')
    .and('contain', 'area').and('contain','Vendor Name Modified').and('contain','Dr. Director Name New')
    .and('contain','Jl. Ujung Dunia').and('contain','085784861117');
  }

  confirmDeleteData() {
    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.submitBtn).contains('Yes, sure').click();

    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('123');
    cy.wait(1000);
    cy.get(locator.tableVendor).should('not.contain', '123');
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
    cy.get(locator.rowTable).eq(1).should('contain', 'AAA').and('contain', '1');
    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'WONOKROMO').and('contain', '1');

    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', '7').and('contain', '1');
    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', '9').and('contain', '1');

    cy.get(locator.tableHeader).contains('Director Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Director Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1');

    cy.get(locator.tableHeader).contains('Address').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Address').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1');

    cy.get(locator.tableHeader).contains('Phone').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Phone').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1');

    cy.get(locator.tableHeader).contains('Territory').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Territory').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1'); 

    cy.get(locator.tableHeader).contains('Area').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Area').click();
    cy.get(locator.rowTable).eq(1).should('contain', '18').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
