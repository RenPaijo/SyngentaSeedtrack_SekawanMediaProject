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
    cy.get(locator.inputSearch).click().type('NK29');
    cy.get(locator.tableMaterial).should('contain', 'NK29');
    cy.get(locator.tableMaterial).find(locator.rowTable).should('have.length', 1);
  }

  searchUnexistData() {
    cy.get(locator.inputSearch).click().type('no data');
    cy.get(locator.tableMaterial).should('not.contain', 'no data');
    cy.get(locator.tableMaterial).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputNumber).type('4');
    cy.get(locator.inputName).type(randomstring);
    cy.get(locator.inputDesc).type('Variant Unknown');

    cy.get(locator.valueSelect).contains('Enter Material Variety').click({force: true});
    cy.get(locator.selectDropdown).contains('Sweet corn first products').click();

    cy.get(locator.inputStage).type('300')
    cy.get(locator.inputYear).type('2023')
  }

  checkValueInputForm() {
    cy.get(locator.inputNumber).should('have.value', '4');
    cy.get(locator.inputName).should('have.value', randomstring);
    cy.get(locator.inputDesc).should('have.value', 'Variant Unknown');
    cy.get(locator.valueSelect).contains('Sweet corn first products').should('be.exist');
    cy.get(locator.inputStage).should('have.value', '300');
    cy.get(locator.inputYear).should('have.value', '2023');
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
    cy.get(locator.tableMaterial).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', '4')
    .and('contain', 'Variant Unknown').and('contain', '2').and('contain', '300').and('contain', 2023);
  }

  checkEmptyWarning() {
    cy.contains('Material Number is required').should('be.visible');
    cy.contains('Material Name is required').should('be.visible');
    cy.contains('Material Description is required').should('be.visible');
    cy.contains('Variety is required').should('be.visible');
    cy.contains('Stage is required').should('be.visible');
    cy.contains('Year is required').should('be.visible');
  }

  clearAnInput() {
    cy.wait(1000);
    cy.get(locator.inputYear).clear();
    cy.get(locator.genericBtn).contains('Save').click();
    cy.contains('Year is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.inputNumber).should('have.value', '');
    cy.get(locator.inputName).should('have.value', '');
    cy.get(locator.inputDesc).should('have.value', '');
    cy.get(locator.valueSelect).contains('Enter Material Variety').should('be.exist');
    cy.get(locator.inputStage).should('have.value', '');
    cy.get(locator.inputYear).should('have.value', '');
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
    cy.get(locator.tableMaterial).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).find(locator.actionBtn).first().click();
  }

  clickEditDropdown() {
    cy.get(locator.dropdown).contains('Edit').click();
  }

  clickDeleteDropdown() {
    cy.get(locator.dropdown).contains('Delete').click();
  }

  changeValue() {
    cy.get(locator.inputNumber).type('9');
    cy.get(locator.inputName).type('-M');
    cy.get(locator.inputDesc).clear().type('Variant Alien');

    cy.get(locator.valueSelect).contains('Sweet corn first products').click({force: true});
    cy.get(locator.selectDropdown).contains('Variety NK212').click();

    cy.get(locator.inputStage).clear().type('350')
    cy.get(locator.inputYear).clear().type('2024')
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
    cy.get(locator.buttonBtn).contains('Oke').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableMaterial).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', '9')
    .and('contain', 'Variant Alien').and('contain', '3').and('contain', '350').and('contain', 2024);
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
    cy.get(locator.tableMaterial).should('not.contain', randomstring);
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
    cy.get(locator.tableHeader).contains('Material Number').click();
    cy.get(locator.rowTable).eq(1).should('contain', '1')
    cy.get(locator.tableHeader).contains('Material Number').click();
    cy.get(locator.rowTable).eq(1).should('contain', '3').and('contain', '1');

    cy.get(locator.tableHeader).contains('Material Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'NK29').and('contain', '1');
    cy.get(locator.tableHeader).contains('Material Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'NK31').and('contain', '1');

    cy.get(locator.tableHeader).contains('Material Description').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Material Chilli').and('contain', '1');
    cy.get(locator.tableHeader).contains('Material Description').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Varian Jagung').and('contain', '1');

    cy.get(locator.tableHeader).contains('Material Variety').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2').and('contain', '1');
    cy.get(locator.tableHeader).contains('Material Variety').click();
    cy.get(locator.rowTable).eq(1).should('contain', '3').and('contain', '1');

    cy.get(locator.tableHeader).contains('Material Stage').click();
    cy.get(locator.rowTable).eq(1).should('contain', '100').and('contain', '1');
    cy.get(locator.tableHeader).contains('Material Stage').click();
    cy.get(locator.rowTable).eq(1).should('contain', '250').and('contain', '1');

    cy.get(locator.tableHeader).contains('Material Year').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2023').and('contain', '1');
    cy.get(locator.tableHeader).contains('Material Year').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2023').and('contain', '1');
  }

  // inputFormAddTag() {
  //   cy.get(locator.inputCode).eq(1).type('<b>CODE</b>').should('have.value', '<b>CODE</b>');
  //   cy.get(locator.inputName).eq(1).type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  // }

  
  
}
