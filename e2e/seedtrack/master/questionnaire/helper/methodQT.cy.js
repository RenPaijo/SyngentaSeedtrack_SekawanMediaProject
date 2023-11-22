import { Locator } from "./locator.cy";

const locator = new Locator();


export class Method {
    clickAddBtn(){
        cy.get(locator.genericBtn).contains('Add').first().click();
        cy.get(locator.form).should('be.visible');
    }

    // questionnaire
    inputFormValid1(){
        cy.get(locator.valueSelect).contains('Choose Questionnaire Type Category')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Questionnaire').click();
        cy.get(locator.inputTypeName).type('Aldan Maulana')
        cy.get(locator.valueSelect).contains('- Choose Country -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Vietnam').click();
        cy.get(locator.valueSelect).contains('Choose Multiple Entry')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Yes').click();
        cy.get(locator.valueSelect).contains('Choose Active')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Yes').click();
    }

    // survey area
    inputFormValid2(){
        cy.get(locator.valueSelect).contains('Choose Questionnaire Type Category')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Scoring Survey Area').click();
        cy.get(locator.inputTypeName).type('Aldan Maulana')
        cy.get(locator.valueSelect).contains('- Choose Country -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Vietnam').click();
        cy.get(locator.valueSelect).contains('Choose Active')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Yes').click();
        cy.get(locator.inputWeight).type(312);
    }

    checkValueInputValid1(){
        cy.get(locator.valueSelect).eq(0).contains('Questionnaire').should('be.exist')
        cy.get(locator.inputTypeName).should('have.value', 'Aldan Maulana')
        cy.get(locator.valueSelect).eq(1).contains('Vietnam').should('be.exist')
        cy.get(locator.valueSelect).eq(2).contains('Yes').should('be.exist')
        cy.get(locator.valueSelect).eq(3).contains('Yes').should('be.exist')
    }
 
    checkValueInputValid2(){
        cy.get(locator.valueSelect).eq(0).contains('Scoring Survey Area').should('be.exist')
        cy.get(locator.inputTypeName).should('have.value', 'Aldan Maulana')
        cy.get(locator.valueSelect).eq(1).contains('Vietnam').should('be.exist')
        cy.get(locator.valueSelect).eq(3).contains('Yes').should('be.exist')
        cy.get(locator.inputWeight).should('have.value', 312)
    }

    submitForm(){
        cy.get(locator.form).find(locator.genericBtn).contains('Save').click();
    }

    confrimAddForm(){
        cy.get(locator.modalCon).find(locator.modalConBody).should('contain', 'Are you sure want to save data?')
        cy.get(locator.submitBtn).contains('Confirm').click();
        cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'The data has been created');
        cy.get(locator.buttonBtn).contains('Oke').click();
    }

    checkSavedDataValid(){
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').first().click()
        cy.get(locator.tableQuestionnaire).first().find(locator.rowTable).should('contain', 'Aldan').and('contain', 'Vietnam')
    }

    requiredErrorFrom(){
        cy.contains('Name is required').should('be.visible').and('be.exist')
        cy.contains('Country is required').should('be.visible').and('be.exist')
        cy.contains('Category is required').should('be.visible').and('be.exist')
        cy.contains('Can More is required').should('be.visible').and('be.exist')
        cy.contains('Is Active is required').should('be.visible').and('be.exist')
        cy.contains('Weight is required').should('be.visible').and('be.exist')
    }

    selectData() {
        cy.get(locator.inputSearch).first().click().type('Aldan');
        cy.wait(2000);
        cy.get(locator.tableQuestionnaire).first().should('contain', 'Aldan');
        cy.contains('Aldan').parent(locator.rowTable).first().find(locator.actionBtn).first().click();
    }

    selectData1() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').first().click()
        cy.get(locator.inputSearch).first().click().type('Aldan');
        cy.wait(2000);
        cy.get(locator.tableQuestionnaire).first().should('contain', 'Aldan');
        cy.contains('Aldan').parent(locator.rowTable).first().find(locator.actionBtn).first().click();
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
        cy.get(locator.inputSearch).first().clear().type('Aldan');
        cy.wait(1500);
        cy.get(locator.tableQuestionnaire).first().should('not.contain', 'Aldan');
    }
    
    changeValue() {
        cy.get(locator.inputName).clear().type('Aldan MF')
        cy.get(locator.valueSelect).contains('Vietnam')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Laos').click();
        cy.get(locator.inputCategory).clear().type(321)
        cy.get(locator.inputWeight).clear().type(123)
    }

    checkedEditInput(){
        cy.get(locator.inputName).should('have.value', 'Aldan MF')
        cy.get(locator.valueSelect).contains('Laos').should('be.exist')
        cy.get(locator.inputCategory).should('have.value', 321)
        cy.get(locator.valueSelect2).contains('Yes').should('be.exist')
        cy.get(locator.valueSelect3).contains('Yes').should('be.exist')
        cy.get(locator.inputWeight).should('have.value', 123)
    }

    checkEditDataValid(){
        cy.get(locator.tableQuestionnaire).first().find(locator.rowTable).should('contain', 'Aldan MF').and('contain', 'Laos')
    }

    selectData2() {
        cy.get(locator.inputSearch).first().click().type('Selected1');
        cy.wait(1000);
        cy.get(locator.tableQuestionnaire).first().should('contain', 'Selected1');
        cy.contains('Selected1').parent(locator.rowTable).first().find(locator.actionBtn).first().click();
    }

    changeValueInvalid() {
        cy.wait(2000)
        cy.get(locator.inputName).clear()
        cy.get(locator.inputCategory).clear()
        cy.get(locator.inputWeight).clear()
    }

    requiredEditInvalid(){
        cy.contains('Name is required').should('be.visible').and('be.exist')
        cy.contains('Category is required').should('be.visible').and('be.exist')
        cy.contains('Weight is required').should('be.visible').and('be.exist')
    }

    validateNumberField(){
        cy.get(locator.inputCategory).type('abcde').should('have.value', /^[0-9]*$/)
        cy.get(locator.inputWeight).type('abcde').should('have.value', /^[0-9]*$/)
    }

    searchValid(){
        cy.get(locator.inputSearch).first().type('Selected1');
        cy.wait(2000)
        cy.get(locator.tableQuestionnaire).first().should('contain', 'Selected1');
        cy.get(locator.tableQuestionnaire).first().find(locator.rowTable).should('have.length', 1);
    }

    searchInvalid(){
        cy.get(locator.inputSearch).first().type('Paijo');
        cy.wait(2000)
        cy.get(locator.tableQuestionnaire).first().should('contain', 'No Data Available');
        cy.get(locator.tableQuestionnaire).first().find(locator.rowTable).should('have.length', 1);
    }

    refreshTable(){
        cy.get(locator.genericBtn).contains('Refresh').first().click()
        cy.wait(1500)
    }

    checkPagination() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').first().click()
        cy.get(locator.paginationDesc).first().should('contain', 'Show 2-')
        cy.wait(1000)
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('1').first().click()
        cy.get(locator.paginationDesc).first().should('contain', 'Show 1-')
        cy.wait(1000)
    }

    sortingTable(){
        cy.get('.gap-4.grid > div:nth-of-type(1) th:nth-of-type(5)').as('headerName')
        cy.get('@headerName').click()
        cy.get(':nth-child(1) > .shadow-xl > :nth-child(2) > .flex-col > .w-full > tbody > :nth-child(1) > :nth-child(5)')
        .as('nameRow')
        cy.get('@nameRow').should('match', /^[Aa]/);
    }
}