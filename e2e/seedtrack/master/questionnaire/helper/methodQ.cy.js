import { Locator } from "./locator.cy";

const locator = new Locator();


export class Method {
    clickAddBtn(){
        cy.get('.gap-4.grid > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) button:nth-of-type(1)').as('add')
        cy.get('@add').click()
        cy.get(locator.form).should('be.visible');
    }

    inputFormValid(){
        cy.get(locator.valueSelect).contains('Choose Type')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Pengairan').click();
        cy.get(locator.valueSelect).contains('Choose Country')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Thailand').click();
        cy.get(locator.valueSelect).contains('Choose Crop')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Melon').click();
        cy.get(locator.valueSelect).contains('Choose Input Type')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Text').click();
        cy.get(locator.inputQuestion).type('Aldan Maulana')
        cy.get(locator.valueSelect).contains('Choose Required')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Yes').click();
        cy.get(locator.inputSequence).type(123)
        cy.get(locator.valueSelect).contains('Choose Active')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Yes').click();
    }

    checkValueInputValid(){
        cy.get(locator.valueSelect).eq(0).contains('Pengairan').should('be.exist')
        cy.get(locator.valueSelect).eq(1).contains('Thailand').should('be.exist')
        cy.get(locator.valueSelect).eq(2).contains('Melon').should('be.exist')
        cy.get(locator.valueSelect).eq(3).contains('Text').should('be.exist')
        cy.get(locator.inputQuestion).should('have.value', 'Aldan Maulana')
        cy.get(locator.valueSelect).eq(4).contains('Yes').should('be.exist')
        cy.get(locator.inputSequence).should('have.value', 123)
        cy.get(locator.valueSelect).eq(5).contains('Yes').should('be.exist')
    }

    submitForm(){
        cy.get(locator.form).find(locator.genericBtn).contains('Save').click();
    }

    confrimAddForm(){
        cy.get(locator.modalCon).find(locator.modalConBody).should('contain', 'Are you sure want to save data?')
        cy.get(locator.submitBtn).contains('Confirm').click();
        cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
        cy.get(locator.buttonBtn).contains('Oke').click();
    }

    checkSavedDataValid(){
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').eq(1).click()
        cy.get(locator.tableQuestionnaire).eq(1).find(locator.rowTable).should('contain', 'Aldan M F').and('contain', 'Malaysia')
    }

    requiredErrorFrom(){
        cy.contains('Type is required').should('be.visible').and('be.exist')
        cy.contains('Country is required').should('be.visible').and('be.exist')
        cy.contains('Crop is required').should('be.visible').and('be.exist')
        cy.contains('Question is required').should('be.visible').and('be.exist')
        cy.contains('Input Type is required').should('be.visible').and('be.exist')
        cy.contains('Is Required is required').should('be.visible').and('be.exist')
        cy.contains('Sequence is required').should('be.visible').and('be.exist')
        cy.contains('Is Active is required').scrollIntoView();
    }

    selectData() {
        cy.wait(1500)
        cy.get('.gap-4.grid > div:nth-of-type(2) div:nth-of-type(3) button:nth-of-type(3)').click()
        cy.get(locator.inputSearch).eq(1).click().type('Aldan M F');
        cy.wait(1000);
        cy.get(locator.tableQuestionnaire).eq(1).should('contain', 'Aldan M F');
        cy.contains('Aldan M F').parent(locator.rowTable).first().find(locator.actionBtn).first().click();
    }

    selectData1() {
        cy.get('.gap-4.grid > div:nth-of-type(2) div:nth-of-type(3) button:nth-of-type(3)').click()
        cy.get(locator.inputSearch).eq(1).click().type('Aldan M F');
        cy.wait(1000);
        cy.get(locator.tableQuestionnaire).eq(1).should('contain', 'Aldan M F');
        cy.contains('Aldan M F').parent(locator.rowTable).first().find(locator.actionBtn).first().click();
    }

    clickEditDropdown() {
        cy.get(locator.dropdown).contains('Edit').click();
    }
    
    clickDeleteDropdown() {
        cy.get(locator.dropdown).contains('Delete').click();
    }

    confirmDeleteData() {
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
        cy.get(locator.buttonBtn).contains('Yes, sure').click();
        cy.wait(1500)
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
        cy.get(locator.buttonBtn).contains('Okay').click();
    }

    checkIfDataGone() {
        cy.get('.gap-4.grid > div:nth-of-type(2) div:nth-of-type(3) button:nth-of-type(3)').click()
        cy.get(locator.inputSearch).eq(1).clear().type('Aldan M F');
        cy.wait(1500);
        cy.get(locator.tableQuestionnaire).eq(1).should('not.contain', 'Aldan');
    }
    
    changeValue() {
        cy.get(locator.inputQuestion).clear().type('Aldan MF')
        cy.get(locator.inputType).clear().type(897)
        cy.get(locator.inputSequence).clear().type(578)
    }

    checkedEditInput(){
        cy.get(locator.inputQuestion).should('have.value', 'Aldan MF')
        cy.get(locator.inputType).should('have.value', 897)
        cy.get(locator.inputSequence).should('have.value', 578)
    }

    checkEditDataValid(){
        cy.get('.gap-4.grid > div:nth-of-type(2) div:nth-of-type(3) button:nth-of-type(3)').click()
        cy.get(locator.tableQuestionnaire).eq(1).find(locator.rowTable).should('contain', 'Aldan MF').and('contain', 897)
    }

    selectData2() {
        cy.get(locator.inputSearch).eq(1).click().type('North');
        cy.wait(1000);
        cy.get(locator.tableQuestionnaire).eq(1).should('contain', 'North');
        cy.contains('North').parent(locator.rowTable).first().find(locator.actionBtn).first().click();
    }

    changeValueInvalid() {
        cy.wait(1000)
        cy.get(locator.inputQuestion).clear()
        cy.get(locator.inputType).clear()
        cy.get(locator.inputSequence).clear()
    }

    requiredEditInvalid(){
        cy.contains('Question is required').should('be.visible').and('be.exist')
        cy.contains('Input Type is required').should('be.visible').and('be.exist')
        cy.contains('Sequence is required').should('be.visible').and('be.exist')
    }

    searchValid(){
        cy.get(locator.inputSearch).eq(1).type('North');
        cy.wait(1500)
        cy.get(locator.tableQuestionnaire).eq(1).should('contain', 'North');
        cy.get(locator.tableQuestionnaire).eq(1).find(locator.rowTable).should('have.length', 1);
    }

    searchInvalid(){
        cy.get(locator.inputSearch).eq(1).type('Paijo');
        cy.wait(1500)
        cy.get(locator.tableQuestionnaire).eq(1).should('contain', 'No Data Available');
        cy.get(locator.tableQuestionnaire).eq(1).find(locator.rowTable).should('have.length', 1);
    }

    refreshTable(){
        cy.get('.gap-4.grid > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) button:nth-of-type(1)').click()
        cy.wait(1500)
    }

    checkPagination() {
        cy.wait(1500)
        cy.get('.gap-4.grid > div:nth-of-type(2) div:nth-of-type(3) button:nth-of-type(3)').click()
        cy.get(locator.paginationDesc).eq(1).should('contain', 'Show 2-')
        cy.wait(1000)
        cy.get('.gap-4.grid > div:nth-of-type(2) div:nth-of-type(3) button:nth-of-type(2)').click()
        cy.get(locator.paginationDesc).eq(1).should('contain', 'Show 1-')
        cy.wait(1000)
    }
    
    sortingTable(){
        cy.get('.gap-4.grid > div:nth-of-type(2) th:nth-of-type(5)').as('headerQuestion')
        cy.get('@headerQuestion').click()
        cy.get('.gap-4.grid > div:nth-of-type(2) tr:nth-of-type(1) > td:nth-of-type(5)').as('questionRow')
        cy.get('@questionRow').should('match', /^[Aa]/);
    }
}