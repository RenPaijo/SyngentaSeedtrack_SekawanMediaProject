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
        cy.wait(1000)
    }

    searchValid(){
        cy.get(locator.inputSearch).type('English');
        cy.wait(2000)
        cy.get(locator.tableMasterApproval).should('contain', 'English');
        cy.get(locator.rowTable).eq(1).should('contain', 'English')
    }

    searchInvalid(){
        cy.get(locator.inputSearch).type('Paijo');
        cy.wait(2000)
        cy.get(locator.tableMasterApproval).should('contain', 'No Data Available');
        cy.get(locator.tableMasterApproval).find(locator.rowTable).should('have.length', 1);
    }

    clickButtonExport(){
        cy.get(locator.genericBtn).contains('Export').click()
        cy.get(locator.dropdown).should('be.visible')
    }

    pdfExport(){
        cy.get(locator.pdf).click()
        cy.wait(1000)
        cy.verifyDownload('.pdf', { contains: true });
    }

    csvExport(){
        cy.get(locator.csv).click()
        cy.wait(1000)
        cy.verifyDownload('.csv', { contains: true });
    }

    filterColumn(){
        cy.get(locator.filter).click()
        cy.wait(1000)
        cy.get(locator.checkbox).eq(0).uncheck({force: true}).should('not.be.checked')
        cy.get(locator.checkbox).eq(4).uncheck({force: true}).should('not.be.checked')
        cy.wait(1000)
    }

    validateFilterColumn(){
        cy.get(locator.tableHeader).contains('No').should('not.exist')
        cy.get(locator.tableHeader).contains('Position').should('not.exist')
    }

    clickFilterMenu(){
        cy.get(locator.buttonBtn).contains('Filter').click()
        cy.get(locator.form).should('be.visible')
    }

    filterMenuSelect(){
        cy.get(locator.valueSelect).click({force: true})
        cy.get(locator.selectDropdown).contains('Indonesia').click();
        cy.get(locator.valueSelect2).click({force: true})
        cy.get(locator.selectDropdown).contains('Menu').click();
    }

    filterMenuReset(){
        cy.get(locator.buttonBtn).contains('Reset').click()
        cy.get(locator.valueSelect).should('have.value', '')
        cy.get(locator.valueSelect2).should('have.value', '')
    }

    filterMenuDownload(){
        cy.get('.duration-200 > button:nth-of-type(2)').click()
        cy.verifyDownload('.xlsx', { contains: true });
    }

    filterMenuSearch(){
        cy.get('.duration-200 > button:nth-of-type(3)').click()
        cy.get(locator.rowTable).should('contain', 'Indonesia');
    }

    sortingTable(){
        cy.get(locator.tableHeader).contains('Country').click();
        cy.get(locator.rowTable).eq(1).should('match', /^[Ee]/);
    }

    clickAddButton(){
        cy.get(locator.genericBtn).contains('Add').click()
        cy.url().should('include', 'https://portal-syn-seedtrack.skwn.dev/master/approval/create')
        cy.get(locator.form).should('be.visible')
    }

    addFormValid(){
        cy.get(locator.valueSelect).contains('- Choose Approval Country -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Vietnam').click();
        cy.get(locator.valueSelect2).contains('- Choose Approval Module -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Menu').click();
        cy.get(locator.valueSelect3).contains('- Choose Approval Crop -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Rice').click();
        cy.get(locator.valueSelect4).contains('- Choose Approval Position -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Manager Field').click();
        cy.get(locator.valueSelect5).contains('- Choose Approval Sendback To -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Manager Field').click();
        cy.get(locator.valueSelect6).contains('- Choose Approval Custom Permission -')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Manager Field').click();
        cy.get(locator.inputExpired).type(123)
        cy.get(locator.inputOrder).type(321)
    }

    checkValueAdd(){
        cy.get(locator.valueSelect).contains('Vietnam').should('be.exist')
        cy.get(locator.valueSelect2).contains('Menu').should('be.exist')
        cy.get(locator.valueSelect3).contains('Rice').should('be.exist')
        cy.get(locator.valueSelect4).contains('Manager Field').should('be.exist')
        // cy.get(locator.valueSelect5).contains('Manager Field').should('be.exist')
        cy.get(locator.valueSelect6).contains('Manager Field').should('be.exist')
        cy.get(locator.inputExpired).should('have.value', 123)
        cy.get(locator.inputOrder).should('have.value', 321)
    }

    addFormWithReminder(){
        cy.get('span').contains('Reminders 1').should('be.visible')
        cy.get(locator.inputReminder).type(12)
        cy.get(locator.inputReminder).should('have.value', 12)
    }

    addFromWith2Reminder(){
        cy.get(locator.genericBtn).contains('Add Reminders').click()
        cy.get('span').contains('Reminders 2').should('be.visible')
        cy.get(locator.inputReminder2).type(123)
        cy.get(locator.inputReminder2).should('have.value', 123)
    }

    clickSaveButton(){
        cy.get(locator.genericBtn).contains('Save').click()
    }

    modalSuccessInput(){
        cy.get('.w-96').should('be.visible');
        cy.get(locator.buttonBtn).contains('Okay').click();
    }

    checkAddInTable(){
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
        cy.get(locator.tableMasterApproval).find(locator.rowTable).should('contain', 'Vietnam').and('contain', 'Rice')
    }

    errorNoInputForm(){
        cy.contains('Country is required').should('be.visible').and('be.exist')
        cy.contains('Module is required').should('be.visible').and('be.exist')
        cy.contains('Crop is required').should('be.visible').and('be.exist')
        cy.contains('Position is required').should('be.visible').and('be.exist')
        cy.contains('Expired is required').should('be.visible').and('be.exist')
        cy.contains('Order is required').should('be.visible').and('be.exist')
        cy.contains('Reminders is required').should('be.visible').and('be.exist')
    }

    selectData() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
        cy.get(locator.inputSearch).click().type('Vietnam');
        cy.wait(1500);
        cy.get(locator.tableMasterApproval).should('contain', 'Vietnam');
        cy.contains('Vietnam').parent(locator.rowTable).find(locator.actionBtn).first().click();
    }

    clickEditDropdown() {
        cy.get(locator.dropdown).contains('Edit').click();
    }
    
    clickDeleteDropdown() {
        cy.get(locator.dropdown).contains('Delete').click();
    }

    changeValue() {
        cy.get(locator.inputExpired).clear().type(987)
        cy.get(locator.inputOrder).clear().type(345)
        cy.get(locator.inputReminder).clear().type(657)
    }

    checkedEditInput(){
        cy.get(locator.inputExpired).should('have.value', 987)
        cy.get(locator.inputOrder).should('have.value', 345)
        cy.get(locator.inputReminder).should('have.value', 657)
    }

    checkEditDataValid(){
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
        cy.get(locator.tableMasterApproval).find(locator.rowTable).should('contain', 987)
    }

    selectData2() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
        cy.get(locator.inputSearch).click().type('Korea selatan');
        cy.wait(1500);
        cy.get(locator.tableMasterApproval).should('contain', 'Korea selatan');
        cy.contains('Korea selatan').parent(locator.rowTable).find(locator.actionBtn).first().click();
    }

    changeValueInvalid() {
        cy.get(locator.inputExpired).clear()
        cy.get(locator.inputOrder).clear()
        cy.get(locator.inputReminder).clear()
    }

    errorEditInvalid(){
        cy.contains('Expired is required').should('be.visible').and('be.exist')
        cy.contains('Order is required').should('be.visible').and('be.exist')
        cy.contains('Reminders is required').should('be.visible').and('be.exist')
    }

    confirmDeleteData() {
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
        cy.get(locator.buttonBtn).contains('Yes, sure').click();
        cy.wait(1500)
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
        cy.get(locator.buttonBtn).contains('Okay').click();
    }

    checkIfDataGone() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
        cy.get(locator.inputSearch).clear().type('Vietnam');
        cy.wait(1500);
        cy.get(locator.tableMasterApproval).should('not.contain', 'Vietnam');
    }
}