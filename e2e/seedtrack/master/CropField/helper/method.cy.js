import { Locator } from "./locator.cy";

const locator = new Locator();

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
        cy.get(locator.inputSearch).type('AZ10');
        cy.wait(2000)
        cy.get(locator.tableCropField).should('contain', 'AZ10');
        cy.get(locator.rowTable).eq(1).should('contain', 'AZ10')
    }

    searchInvalid(){
        cy.get(locator.inputSearch).type('Paijo');
        cy.wait(2000)
        cy.get(locator.tableCropField).should('contain', 'No Data Available');
        cy.get(locator.tableCropField).find(locator.rowTable).should('have.length', 1);
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
        cy.get(locator.rowTable).eq(1).should('match', /^[Aa]/);
    }

    clickAddButton(){
        cy.get(locator.genericBtn).contains('Add').click()
        cy.get(locator.formHeader).should('be.visible').and('be.exist')
    }

    addFormValid(){
        cy.get(locator.inputCode).type('ALD123')
        cy.get(locator.valueSelect).contains('Enter Crops Field Country')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Vietnam').click();
        cy.get(locator.valueSelect2).contains('Enter Crops Field Crops')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Melon').click();
        cy.get(locator.valueSelect3).contains('Enter Crops Field Territory')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Malang').click();
        cy.get(locator.valueSelect4).contains('Enter Crops Field User')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Manager').click();
        cy.get(locator.valueSelect5).contains('Enter Crops Field Season')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('Test').click();
        cy.get(locator.inputHybrid).type('Aldan')
        cy.get(locator.valueSelect6).contains('Enter Crops Field Material')
        .click({force: true});
        cy.get(locator.selectDropdown).contains('NK31').click();
        cy.get(locator.inputYield).type(123)
        cy.get(locator.inputPlanting).type('Maulana')
        cy.get(locator.inputDistance).type('Fajri')
        cy.get(locator.inputRatio).type('mafa')
        cy.get(locator.inputMale).type(12)
        cy.get(locator.inputFemale).type(18)
        cy.get(locator.inputPolination).type('mate')
        cy.get(locator.inputClass).type('alfa')
    }

    checkValueAdd(){
        cy.get(locator.inputCode).should('have.value', 'ALD123')
        cy.get(locator.valueSelect).contains('Vietnam').should('be.exist')
        cy.get(locator.valueSelect2).contains('Melon').should('be.exist')
        cy.get(locator.valueSelect3).contains('Malang').should('be.exist')
        cy.get(locator.valueSelect4).contains('Manager').should('be.exist')
        cy.get(locator.valueSelect5).contains('Test').should('be.exist')
        cy.get(locator.inputHybrid).should('have.value', 'Aldan')
        cy.get(locator.valueSelect6).contains('NK31').should('be.exist')
        cy.get(locator.inputPlanting).should('have.value', 'Maulana')
        cy.get(locator.inputDistance).should('have.value', 'Fajri')
        cy.get(locator.inputRatio).should('have.value', 'mafa')
        cy.get(locator.inputMale).should('have.value', 12)
        cy.get(locator.inputFemale).should('have.value', 18)
        cy.get(locator.inputPolination).should('have.value', 'mate')
        cy.get(locator.inputClass).should('have.value', 'alfa')
    }

    clickSaveButton(){
        cy.get(locator.genericBtn).contains('Save').click()
    }

    modalSuccessInput(){
        cy.get(locator.modalCon).find(locator.modalConBody).should('contain', 'Are you sure want to save data?')
        cy.get(locator.submitBtn).contains('Confirm').click();
        cy.get(locator.modalCon).find(locator.modalConTitle).should('contain', 'Data has been updated');
        cy.get(locator.buttonBtn).contains('Oke').click();
    }

    checkAddInTable(){
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
        cy.get(locator.tableCropField).find(locator.rowTable).should('contain', 'Vietnam').and('contain', 'Rice')
    }

    errorNoInputForm(){
        cy.contains('Crops field season is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field hybrid is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field material is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field target yield is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field split planting is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field planting distance is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field planting ratio is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field population male is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field population female is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field polination is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field seed class is required').scrollIntoView().should('be.visible').and('be.exist')
    }

    selectData() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('3').click()
        cy.get(locator.inputSearch).click().type('FCC');
        cy.wait(1500);
        cy.get(locator.tableCropField).should('contain', 'FCC');
        cy.contains('FCC').parent(locator.rowTable).find(locator.actionBtn).click();
    }

    clickEditDropdown() {
        cy.get(locator.dropdown).contains('Edit').click();
    }
    
    clickDeleteDropdown() {
        cy.get(locator.dropdown).contains('Delete').click();
    }

    changeValue() {
        cy.get(locator.inputMale).clear().type(123)
        cy.get(locator.inputFemale).clear().type(321)
        cy.get(locator.inputClass).clear().type('Paijo')
    }

    checkedEditInput(){
        cy.get(locator.inputMale).should('have.value', 123)
        cy.get(locator.inputFemale).should('have.value', 321)
        cy.get(locator.inputClass).should('have.value', 'Paijo')
    }

    checkEditDataValid(){
        cy.reload()
        cy.wait(1000)
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('3').click()
        cy.get(locator.tableCropField).find(locator.rowTable).should('contain', 'Paijo')
    }

    selectData2() {
        cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('3').click()
        cy.get(locator.inputSearch).click().type('AI');
        cy.wait(1500);
        cy.get(locator.tableCropField).should('contain', 'AI');
        cy.contains('AI').parent(locator.rowTable).find(locator.actionBtn).first().click();
    }

    changeValueInvalid() {
        cy.get(locator.inputMale).clear()
        cy.get(locator.inputFemale).clear()
        cy.get(locator.inputClass).clear()
    }

    errorEditInvalid(){
        cy.contains('Crops field population male is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field population female is required').scrollIntoView().should('be.visible').and('be.exist')
        cy.contains('Crops field seed class is required').scrollIntoView().should('be.visible').and('be.exist')
    }

    selectData3() {
        cy.get(locator.inputSearch).click().type('AAA1');
        cy.wait(1500);
        cy.get(locator.tableCropField).should('contain', 'AAA1');
        cy.contains('AAA1').parent(locator.rowTable).find(locator.actionBtn).first().click();
    }

    confirmDeleteData() {
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'Are you sure want to delete this data?')
        cy.get(locator.buttonBtn).contains('Yes, sure').click();
        cy.wait(1500)
        cy.get(locator.modalConfirmDelete).find(locator.modalBodyConfirmDelete).should('contain', 'The data has been deleted');
        cy.get(locator.buttonBtn).contains('Okay').click();
    }

    checkIfDataGone() {
        cy.get(locator.inputSearch).clear().type('AAA1');
        cy.wait(1500);
        cy.get(locator.tableCropField).should('not.contain', 'AAA1');
    }
}