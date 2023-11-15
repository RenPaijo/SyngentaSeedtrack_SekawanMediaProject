import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx';
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx';
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf';

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('CucUserId');
    cy.get(locator.tableCuc).should('contain', 'CucUserId');
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.valueSelect).contains('Select User Countries User').click({force: true});
    cy.get(locator.selectDropdown).contains('CucUserId').click();

    cy.get(locator.valueSelect).contains('Select User Countries Crops').click({force: true});
    cy.get(locator.selectDropdown).contains('Corn').click();

    cy.get(locator.valueSelect).contains('Select User Countries Country').click({force: true});
    cy.get(locator.selectDropdown).contains('Indonesia').click();
  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('CucUserId').should('be.exist');
    cy.get(locator.valueSelect).contains('Corn').should('be.exist');
    cy.get(locator.valueSelect).contains('Indonesia').should('be.exist');
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
    cy.get(locator.tableCuc).should('contain', 'CucUserId');
    cy.contains('CucUserId').parent(locator.rowTable).should('contain', 'Corn')
    .and('contain', 'Indonesia');
  }

  checkEmptyWarning() {
    cy.contains('User is required').should('be.visible');
    cy.contains('Crops is required').should('be.visible');
    cy.contains('Country is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('Select User Countries User').should('be.exist');
    cy.get(locator.valueSelect).contains('Select User Countries Crops').should('be.exist');
    cy.get(locator.valueSelect).contains('Select User Countries Country').should('be.exist');
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
    cy.get(locator.inputSearch).click().type('CucUserId');
    cy.wait(1000);
    cy.get(locator.tableCuc).should('contain', 'CucUserId');
    cy.contains('CucUserId').parent(locator.rowTable).find(locator.actionBtn).first().click();
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
    cy.get(locator.valueSelect).contains('Corn').click({force: true});
    cy.get(locator.selectDropdown).contains('Rice').click();

    cy.get(locator.valueSelect).contains('Indonesia').click({force: true});
    cy.get(locator.selectDropdown).contains('Vietnam').click();

  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'The data has been updated!');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('CucUserId');
    cy.wait(1000);
    cy.get(locator.tableCuc).should('contain', 'CucUserId');
    cy.contains('CucUserId').parent(locator.rowTable).should('contain', 'Vietnam')
    .and('contain', 'Rice')
  }

  confirmDeleteData() {
    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.submitBtn).contains('Yes, sure').click();

    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('CucUserId');
    cy.wait(1000);
    cy.get(locator.tableCuc).should('not.contain', 'CucUserId');
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
    cy.get(locator.tableHeader).contains('Config User Countries Status').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');
    cy.get(locator.tableHeader).contains('Config User Countries Status').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');

    cy.get(locator.tableHeader).contains('Config User Countries User').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Config User Countries User').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')

    cy.get(locator.tableHeader).contains('Config User Countries Crops').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');
    cy.get(locator.tableHeader).contains('Config User Countries Crops').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');

    cy.get(locator.tableHeader).contains('Config User Countries Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'SBY').and('contain', '1');
    cy.get(locator.tableHeader).contains('CConfig User Countries Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'JOG').and('contain', '1');
  }

  resetSelect() {
    cy.wait(3000);
    cy.get(locator.resetSelect).click({multiple: true, force: true});
    cy.get(locator.inputSelect).contains('Select User Countries User').should('be.exist');
    cy.get(locator.inputSelect).contains('Select User Countries Crops').should('be.exist');
    cy.get(locator.inputSelect).contains('Select User Countries Country').should('be.exist');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
