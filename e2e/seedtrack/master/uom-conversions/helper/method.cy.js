import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx';
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx';
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf';

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('Miligram');
    cy.get(locator.tableUom).should('contain', 'Miligram');
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputName).type('0.001');

    cy.get(locator.valueSelect).contains('trans-form-placeholder-uom-con-from-id').click({force: true});
    cy.get(locator.selectDropdown).contains('Litre').click();

    cy.get(locator.valueSelect).contains('trans-form-placeholder-uom-con-target-id').click({force: true});
    cy.get(locator.selectDropdown).contains('KiloLitre').click();
  }

  checkValueInputForm() {
    cy.get(locator.inputName).should('have.value', '0.001');

    cy.get(locator.valueSelect).contains('Litre').should('be.exist');
    cy.get(locator.valueSelect).contains('KiloLitre').should('be.exist');
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
    cy.get(locator.tableUom).should('contain', 'Litre');
    cy.contains('Litre').parent(locator.rowTable).should('contain', '0.001');
  }

  checkEmptyWarning() {
    cy.contains('Conversion Factor is required').should('be.visible');
    cy.contains('Uom From is required').should('be.visible');
    cy.contains('Uom Target is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('trans-form-placeholder-uom-con-from-id').should('be.exist');
    cy.get(locator.valueSelect).contains('trans-form-placeholder-uom-con-target-id').should('be.exist');

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
    cy.get(locator.inputSearch).click().type('Litre');
    cy.wait(1000);
    cy.get(locator.tableUom).should('contain', 'Litre');
    cy.contains('Litre').parent(locator.rowTable).find(locator.actionBtn).first().click();
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
    cy.get(locator.inputName).type('1000');

    cy.get(locator.valueSelect).contains('Litre').click({force: true});
    cy.get(locator.selectDropdown).contains('KiloLitre').click();

    cy.get(locator.valueSelect).contains('KiloLitre').eq(1).click({force: true});
    cy.get(locator.selectDropdown).contains('Litre').click();
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'The data has been updated!');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('KiloLitre');
    cy.wait(1000);
    cy.get(locator.tableUom).should('contain', 'KiloLitre');
    cy.contains('KiloLitre').parent(locator.rowTable).should('contain', '1000');
  }

  confirmDeleteData() {
    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.submitBtn).contains('Yes, sure').click();

    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('Litre');
    cy.wait(1000);
    cy.get(locator.tableUom).should('not.contain', 'Litre');
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
    cy.get(locator.tableHeader).contains('Uom From').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Gram').and('contain', '1');
    cy.get(locator.tableHeader).contains('Uom From').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Miligram').and('contain', '1');

    cy.get(locator.tableHeader).contains('Uom Target').click();
    cy.get(locator.rowTable).eq(1).should('contain', '37').and('contain', '1');
    cy.get(locator.tableHeader).contains('Uom Target').click();
    cy.get(locator.rowTable).eq(1).should('contain', '79').and('contain', '1');

    cy.get(locator.tableHeader).contains('Conversion Factor').click();
    cy.get(locator.rowTable).eq(1).should('contain', '0.001')
    cy.get(locator.tableHeader).contains('Conversion Factor').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1000000').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
