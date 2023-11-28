import { Locator } from "./locator.cy";

const locator = new Locator();
const correctXlsxPath = './cypress/fixtures/seedtrack/seed-production-planning-template.xlsx'
const unsupportedPath = './cypress/fixtures/seedtrack/unsupported.pdf'

export class Method {
    refreshTable(){
        cy.get(locator.genericBtn).contains('Refresh').click()
        cy.wait(1500)
    }

    checkPagination() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
        cy.get(locator.paginationDesc).should('contain', 'Show 2-')
        cy.wait(1000)
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('1').click()
        cy.get(locator.paginationDesc).should('contain', 'Show 1-')
    }

    searchValid(){
        cy.get(locator.inputSearch).type('02-Delivery');
        cy.wait(2000)
        cy.get(locator.tableMovementType).should('contain', '02-Delivery');
        cy.get(locator.rowTable).eq(1).should('contain', '02-Delivery')
    }

    searchInvalid(){
        cy.get(locator.inputSearch).type('no data');
        cy.wait(2000)
        cy.get(locator.tableMovementType).should('contain', 'No Data Available');
        cy.get(locator.tableMovementType).find(locator.rowTable).should('have.length', 1);
    }

    clickFilterMenu(){
        cy.get(locator.buttonBtn).contains('Filter').click()
        cy.get(locator.form).should('be.visible')
    }

    filterMenuSelect(){
        cy.get(locator.filterCode).type('02-Delivery')
        cy.get(locator.filterOp).type('-')
    }

    filterMenuReset(){
        cy.get(locator.buttonBtn).contains('Reset').click()
        cy.get(locator.filterCode).should('have.value', '')
        cy.get(locator.filterOp).should('have.value', '')
    }

    filterMenuDownload(){
        cy.get('.duration-200 > button:nth-of-type(2)').click()
        cy.verifyDownload('.xlsx', { contains: true });
    }

    filterMenuSearch(){
        cy.get('.duration-200 > button:nth-of-type(3)').click()
        cy.get(locator.rowTable).eq(1).should('contain', '02-Delivery');
    }

    sortingTable(){
        cy.get(locator.tableHeader).contains('Remark').click();
        cy.get(locator.rowTable).eq(1).should('match', /^[Cc]/);
    }

    clickAddButton(){
        cy.get(locator.genericBtn).contains('Add').click()
        cy.get(locator.form).should('be.visible')
    }

    addFormValid(){
        cy.get(locator.inputCode).type('12-Aldan')
        cy.get(locator.inputOp).type('Fajri')
        cy.get(locator.inputRemark).type('Maulana')
    }

    checkValueAdd(){
        cy.get(locator.inputCode).should('have.value', '12-Aldan')
        cy.get(locator.inputOp).should('have.value', 'Fajri')
        cy.get(locator.inputRemark).should('have.value', 'Maulana')
    }

    clickSaveButton(){
        cy.get(locator.genericBtn).contains('Save').click()
    }

    modalSuccessInput(){
        cy.get('.w-96').should('be.visible');
        cy.get(locator.submitBtn).contains('Yes').click();
    }

    modalVerificationSuccess(){
        cy.get('.w-96').should('be.visible');
        cy.get(locator.buttonBtn).contains('Ok').click();
    }

    checkAddInTable(){
        cy.get(locator.tableMovementType).find(locator.rowTable).should('contain', '12-Aldan').and('contain', 'Fajri')
    }

    errorNoInputForm(){
        cy.contains('Movement Type Code is required').should('be.visible').and('be.exist')
        cy.contains('Movement Type Operator is required').should('be.visible').and('be.exist')
        cy.contains('Movement Type Remark is required').should('be.visible').and('be.exist')
    }

    selectData() {
        cy.get(locator.inputSearch).click().type('12-Aldan');
        cy.wait(1000);
        cy.get(locator.tableMovementType).should('contain', '12-Aldan');
        cy.contains('12-Aldan').parent(locator.rowTable).find(locator.actionBtn).click();
    }

    clickEditDropdown() {
        cy.get(locator.dropdown).contains('Edit').click();
    }
    
    clickDeleteDropdown() {
        cy.get(locator.dropdown).contains('Delete').click();
    }

    changeValue() {
        cy.get(locator.inputRemark).clear().type('Maulana Aldan')
    }

    checkedEditInput(){
        cy.get(locator.inputRemark).should('have.value', 'Maulana Aldan')
    }

    checkEditDataValid(){
        cy.get(locator.tableMovementType).find(locator.rowTable).should('contain', 'Maulana Aldan')
    }

    changeValueInvalid() {
        cy.get(locator.inputRemark).clear()
    }

    errorEditInvalid(){
        cy.contains('Movement Type Remark is required').should('be.visible').and('be.exist')
    }

    confirmDeleteData() {
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure to delete this data?')
        cy.get(locator.submitBtn).contains('Yes').click();
        cy.wait(1500)
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
        cy.get(locator.buttonBtn).contains('Ok').click();
    }

    checkIfDataGone() {
        cy.get(locator.inputSearch).clear().type('12-Aldan');
        cy.wait(1500);
        cy.get(locator.tableMovementType).should('not.contain', '12-Aldan');
    }
}