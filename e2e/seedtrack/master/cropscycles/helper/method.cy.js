import { Locator } from "./locator.cy";
import { generateString } from "./random.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat
const correctXlsxPath = './cypress/fixtures/template_master_jenis_padi.xlsx';
const nonTemplateXlsxPath = './cypress/fixtures/seedtrack/non-template.xlsx';
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf';

const randstring = generateString(6);
const randomstring = `${randstring}`;

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('Code');
    cy.get(locator.tableCropsCycles).should('contain', 'Code');
    cy.get(locator.tableCropsCycles).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.valueSelect).contains('Choose Country').click({force: true});
    cy.get(locator.selectDropdown).contains('Vietnam').click();

    cy.get(locator.valueSelect).contains('Choose Crop').click({force: true});
    cy.get(locator.selectDropdown).contains('Carrot update').click();

    cy.get(locator.valueSelect).contains('Choose Season').click({force: true});
    cy.get(locator.selectDropdown).contains('Wet').click();

    cy.get(locator.inputCode).type(randomstring);
    cy.get(locator.inputName).type('Carrot season');
    cy.get(locator.inputYear).type('2024').type('{enter}');
    cy.get(locator.inputRemark).type('ini remark');

    cy.get(locator.inputDate).click();
    cy.get(locator.datePicker).find(locator.datePickerMonthContainer)
    .find(locator.datePickerDay).contains('20').click();
    cy.get(locator.datePicker).find(locator.datePickerMonthContainer)
    .find(locator.datePickerDay).contains('21').click();

  }

  checkValueInputForm() {
    cy.get(locator.valueSelect).contains('Vietnam').should('be.exist');
    cy.get(locator.valueSelect).contains('Carrot update').should('be.exist');
    cy.get(locator.valueSelect).contains('Wet').should('be.exist');

    cy.get(locator.inputCode).should('have.value', randomstring);
    cy.get(locator.inputName).should('have.value', 'Carrot season');
    cy.get(locator.inputYear).should('have.value', '2024');
    cy.get(locator.inputDate).should('contain.value', '/20').and('contain.value', '/21');
    cy.get(locator.inputRemark).should('have.value', 'ini remark');
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
    cy.get(locator.tableCropsCycles).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Vietnam')
    .and('contain', 'CARROT').and('contain','2024').and('contain', 'Carrot season')
    .and('contain', 'ini remark').and('contain', 'Wet').and('contain', '-20').and('contain', '-21');
  }

  checkEmptyWarning() {
    cy.contains('Country is required').should('be.visible');
    cy.contains('Crop is required').should('be.visible');
    cy.contains('Type is required').should('be.visible');
    cy.contains('Code is required').should('be.visible');
    cy.contains('Year is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.contains('Date is required').should('be.visible');
    cy.contains('Remark is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.valueSelect).contains('Choose Country').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Crop').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Season').should('be.exist');

    cy.get(locator.inputCode).should('have.value', '');
    cy.get(locator.inputYear).should('have.value', '');
    cy.get(locator.inputName).should('have.value', '');
    cy.get(locator.inputDate).should('have.value', '');
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
    cy.get(locator.tableCropsCycles).should('contain', randomstring);
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
    cy.get(locator.valueSelect).contains('Vietnam').click({force: true});
    cy.get(locator.selectDropdown).contains('Laos').click();

    cy.get(locator.valueSelect).contains('Carrot update').click({force: true});
    cy.get(locator.selectDropdown).contains('Onion Update').click();

    cy.get(locator.valueSelect).contains('Wet').click({force: true});
    cy.get(locator.selectDropdown).contains('Dry').click();

    cy.get(locator.inputCode).type('-M');
    cy.get(locator.inputYear).clear().type('2023');
    cy.get(locator.inputName).clear().type('Cabe Bawang season');

    cy.get(locator.datePicker).find(locator.datePickerMonthContainer)
    .find(locator.datePickerDay).contains('10').click();
    cy.get(locator.datePicker).find(locator.datePickerMonthContainer)
    .find(locator.datePickerDay).contains('11').click();

    cy.get(locator.inputRemark).clear().type('remark baru');
  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'The data has been updated!');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type(randomstring);
    cy.wait(1000);
    cy.get(locator.tableCropsCycles).should('contain', randomstring);
    cy.contains(randomstring).parent(locator.rowTable).should('contain', 'Laos')
    .and('contain', 'ONION').and('contain','2023').and('contain', 'Cabe Bawang season')
    .and('contain', 'remark baru').and('contain', 'Dry').and('contain', '-10').and('contain', '-11');
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
    cy.get(locator.tableCropsCycles).should('not.contain', randomstring);
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
    cy.get(locator.tableHeader).contains('Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'English').and('contain', '1');
    cy.get(locator.tableHeader).contains('Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Malaysia').and('contain', '1');

    cy.get(locator.tableHeader).contains('Crops Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'CARROT').and('contain', '1');
    cy.get(locator.tableHeader).contains('Crops Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'CORN').and('contain', '1');

    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Dry').and('contain', '1');
    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Wet').and('contain', '1');

    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'SBY').and('contain', '1');
    cy.get(locator.tableHeader).contains('Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'JOG').and('contain', '1');

    cy.get(locator.tableHeader).contains('Year').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2022').and('contain', '1');
    cy.get(locator.tableHeader).contains('Year').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2023').and('contain', '1');

    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Create').and('contain', '1');
    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'SC Cycle').and('contain', '1');

    cy.get(locator.tableHeader).contains('Start Date').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2022-01-01').and('contain', '1');
    cy.get(locator.tableHeader).contains('Start Date').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2023-11-06').and('contain', '1');

    cy.get(locator.tableHeader).contains('End Date').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2022-12-01').and('contain', '1');
    cy.get(locator.tableHeader).contains('End Date').click();
    cy.get(locator.rowTable).eq(1).should('contain', '2023-11-11').and('contain', '1');

    cy.get(locator.tableHeader).contains('Remark').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Check').and('contain', '1');
    cy.get(locator.tableHeader).contains('Remark').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Remark').and('contain', '1');
  }

  inputFormAddHtmlTag() {
    cy.get(locator.inputName).clear().type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  }

  selectDataWithHtmlTag() {
    cy.get(locator.inputSearch).click().type('<h1>Nama</h1>');
    cy.wait(1000);
    cy.get(locator.tableCropsCycles).should('contain', '<h1>Nama</h1>');
    cy.contains('<h1>Nama</h1>').parent(locator.rowTable).find(locator.actionBtn).click();
  }
  
  
}
