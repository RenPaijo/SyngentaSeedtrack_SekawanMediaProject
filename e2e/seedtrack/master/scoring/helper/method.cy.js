import { Locator } from "./locator.cy";

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

export class Method {
  //method untuk aksi search
  searchAction() {
    cy.get(locator.inputSearch).click().type('Jenis bibit');
    cy.get(locator.tableScoring).should('contain', 'Jenis bibit');
    cy.get(locator.tableScoring).find(locator.rowTable).should('have.length', 1);
  }

  clickAddBtn() {
    cy.get(locator.genericBtn).contains('Add').click();
    cy.get(locator.form).should('be.visible');
    cy.get(locator.modalTitleAdd).contains('Form Create Scoring Parameter').should('be.visible');
  }

  inputFormAdd() {
    cy.get(locator.inputName).type('Jenis Cabbage');

    cy.get(locator.valueSelect).contains('Choose Country').click({force: true});
    cy.get(locator.selectDropdown).contains('Singapura').click();
    
    cy.get(locator.valueSelect).contains('Choose Crop').click({force: true});
    cy.get(locator.selectDropdown).contains('Corn').click();
   
    cy.get(locator.valueSelect).contains('Choose Survey Category Type').click({force: true});
    cy.get(locator.selectDropdown).contains('Technical').click();
    
  }

  checkValueInputForm() {
    cy.get(locator.inputName).should('have.value', 'Jenis Cabbage');

    cy.get(locator.valueSelect).contains('Singapura').should('be.exist');
    cy.get(locator.valueSelect).contains('Corn').should('be.exist');
    cy.get(locator.valueSelect).contains('Technical').should('be.exist');
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
    cy.get(locator.tableScoring).should('contain', 'Jenis Cabbage');
    cy.contains('CBG').parent(locator.rowTable).should('contain', 'Singapura')
    .and('contain', 'Corn').and('contain', 'Technical');
  }
  
  checkEmptyWarning() {
    cy.contains('Name is required').should('be.visible');
    cy.contains('Country is required').should('be.visible');
    cy.contains('Crops is required').should('be.visible');
    cy.contains('Type is required').should('be.visible');
  }

  closeAddForm() {
    cy.get(locator.form).find(locator.modalClose).click();
  }

  checkEmptyInput() {
    cy.get(locator.inputName).should('have.value', '');
    cy.get(locator.valueSelect).contains('Choose Country').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Crop').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Survey Category Type').should('be.exist');
  }

  selectData() {
    cy.get(locator.inputSearch).click().type('Jenis Cabbage');
    cy.wait(1000);
    cy.get(locator.tableScoring).should('contain', 'Jenis Cabbage');
    cy.contains('Jenis Cabbage').parent(locator.rowTable).find(locator.actionBtn).click();
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
    cy.get(locator.inputName).type(' Modified');

    cy.get(locator.valueSelect).contains('Singapura').click()
    cy.get(locator.selectDropdown).contains('English').click();

    cy.get(locator.valueSelect).contains('Corn').should('be.exist');
    cy.get(locator.selectDropdown).contains('Tomato').click();

    cy.get(locator.valueSelect).contains('Technical').should('be.exist');
    cy.get(locator.selectDropdown).contains('Selected').click();

  }

  confirmEditedData() {
    cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'The data has been updated!');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfNewDataEdited() {
    cy.get(locator.inputSearch).click().clear().type('Jenis Cabbage Modified');
    cy.wait(1000);
    cy.get(locator.tableScoring).should('contain', 'Jenis Cabbage Modified');
    cy.contains('Jenis Cabbage Modified').parent(locator.rowTable).should('contain', 'English')
    .and('contain', 'Tomato').and('contain', 'Selected');
  }

  confirmDeleteData() {
    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'Are you sure want to delete this data?')
    cy.get(locator.submitBtn).contains('Yes, sure').click();

    cy.get(locator.modalCon).find(locator.modalBodyConfirm).should('contain', 'The data has been deleted');
    cy.get(locator.buttonBtn).contains('Okay').click();
  }

  checkIfDataGone() {
    cy.get(locator.inputSearch).click().clear().type('Jenis Cabbage Modified');
    cy.wait(1000);
    cy.get(locator.tableScoring).should('not.contain', 'Jenis Cabbage Modified');
  }

  sortingData() {
    cy.get(locator.tableHeader).contains('Name').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Jenis bibit').and('contain', '1');
    cy.get(locator.tableHeader).contains('Country').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Indonesia').and('contain', '1');
    cy.get(locator.tableHeader).contains('Crop').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'Corn').and('contain', '1');
    cy.get(locator.tableHeader).contains('Type').click();
    cy.get(locator.rowTable).eq(1).should('contain', '27').and('contain', '1');
  }

  resetSelect() {
    cy.wait(3000);
    cy.get(locator.resetSelect).click({multiple: true, force: true});
    cy.get(locator.valueSelect).contains('Choose Country').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Crop').should('be.exist');
    cy.get(locator.valueSelect).contains('Choose Survey Category Type').should('be.exist');
  }

  inputFormAddHtmlTag() {
    cy.get(locator.inputName).clear().type('<h1>Nama</h1>').should('have.value', '<h1>Nama</h1>');
  }

  selectDataWithHtmlTag() {
    cy.get(locator.inputSearch).click().type('<h1>Nama</h1>');
    cy.wait(1000);
    cy.get(locator.tableScoring).should('contain', '<h1>Nama</h1>');
    cy.contains('<h1>Nama</h1>').parent(locator.rowTable).find(locator.actionBtn).click();
  }

  
  
}
