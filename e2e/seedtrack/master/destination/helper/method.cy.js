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
    cy.get(locator.inputSearch).click().type('JOG');
    cy.get(locator.tableDestination).should('contain', 'JOG');
    cy.get(locator.tableDestination).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.valueSelect).contains('Enter Destination Country').click({force: true});
    cy.get(locator.selectDropdown).contains('Vietnam').click();

    cy.get(locator.inputType).type('1');

    cy.get(locator.valueSelect).contains('Enter Destination Area').click({force: true});
    cy.get(locator.selectDropdown).contains('Area').click();

    cy.get(locator.inputCode).type(randomstring);
    cy.get(locator.inputName).type('Vietnam');
    cy.get(locator.inputLat).type('-7.9771951670213');
    cy.get(locator.inputLong).type('112.65660081075');
    cy.get(locator.inputRemark).type('ini remark');
  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('Vietnam').should('be.exist');
    cy.get(locator.valueSelect).contains('Area').should('be.exist');

    cy.get(locator.inputType).should('have.value', '1');
    cy.get(locator.inputCode).should('have.value', randomstring);
    cy.get(locator.inputName).should('have.value', 'Vietnam');
    cy.get(locator.inputLat).should('have.value', '-7.9771951670213');
    cy.get(locator.inputLong).should('have.value', '112.65660081075');
    cy.get(locator.inputRemark).should('have.value', 'ini remark');
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
    cy.get(locator.tableDestination).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Vietnam')
    .and('contain', '-7.9771951670213').and('contain','112.65660081075').and('contain', 'ini remark');
  }

  checkEmptyWarning() {
    cy.contains('Country is required').should('be.visible');
    cy.contains('Type is required').should('be.visible');
    cy.contains('Area is required').should('be.visible');
    cy.contains('Code is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.contains('Latitude is required').should('be.visible');
    cy.contains('Longitude is required').should('be.visible');
    cy.contains('Remark is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('Enter Destination Country').should('be.exist');
    cy.get(locator.valueSelect).contains('Enter Destination Area').should('be.exist');

    cy.get(locator.inputType).should('have.value', '');
    cy.get(locator.inputCode).should('have.value', '');
    cy.get(locator.inputName).should('have.value', '');
    cy.get(locator.inputLat).should('have.value', '');
    cy.get(locator.inputLong).should('have.value', '');
    cy.get(locator.inputRemark).should('have.value', '');
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
    cy.get(locator.tableDestination).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.valueSelect).contains('Vietnam').click({force: true});
    cy.get(locator.selectDropdown).contains('Laos').click();

    cy.get(locator.inputType).clear().type('2');
    cy.get(locator.inputCode).type('-M');
    cy.get(locator.inputName).clear().type('Laos');
    cy.get(locator.inputLat).clear().type('-3.01302103123');
    cy.get(locator.inputLong).clear().type('7.9771951670213');
    cy.get(locator.inputRemark).clear().type('remark baru');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableDestination).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Laos')
    .and('contain', '-3.01302103123').and('contain', '7.9771951670213').and('contain', 'remark baru');
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
    cy.get(locator.tableDestination).should('not.contain', randomstring);
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
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');
    cy.get(locator.tableHeader).contains('Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');

    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')

    cy.get(locator.tableHeader).contains('Area').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');
    cy.get(locator.tableHeader).contains('Area').click();
    cy.get(locator.rowTable).eq(1).should('contain', '4').and('contain', '1');

    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'SBY').and('contain', '1');
    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'JOG').and('contain', '1');

    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Surabaya').and('contain', '1');
    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Jogja').and('contain', '1');

    cy.get(locator.tableHeader).contains('Lat').click();
    cy.get(locator.rowTable).eq(1).should('contain', '-7.9771951670213').and('contain', '1');
    cy.get(locator.tableHeader).contains('Lat').click();
    cy.get(locator.rowTable).eq(1).should('contain', '-7.9771951670213').and('contain', '1');

    cy.get(locator.tableHeader).contains('Long').click();
    cy.get(locator.rowTable).eq(1).should('contain', '112.65660081075').and('contain', '1');
    cy.get(locator.tableHeader).contains('Long').click();
    cy.get(locator.rowTable).eq(1).should('contain', '112.65660081075').and('contain', '1');

    cy.get(locator.tableHeader).contains('Remark').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'This is remark').and('contain', '1');
    cy.get(locator.tableHeader).contains('Remark').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'This is remark').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
