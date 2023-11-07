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
        cy.get(locator.inputSearch).type('Variety NK212');
        cy.wait(2000)
        cy.get(locator.tableSeedProduction).should('contain', 'Variety NK212');
        cy.get(locator.tableSeedProduction).find(locator.rowTable).should('have.length', 2);
    }

    searchInvalid(){
        cy.get(locator.inputSearch).type('Paijo');
        cy.wait(2000)
        cy.get(locator.tableSeedProduction).should('contain', 'No Data Available');
        cy.get(locator.tableSeedProduction).find(locator.rowTable).should('have.length', 1);
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
        cy.get(locator.tableHeader).contains('Yield').should('not.exist')
    }

    clickImportButton(){
        cy.get(locator.genericBtn).contains('Import').click()
        cy.get(locator.form).should('be.visible')
    }

    clickUploadButton(){
        cy.get(locator.buttonBtn).contains('Upload').click()
        cy.wait(1000)
    }

    importValidFile(){
        cy.get(locator.importFile).selectFile(correctXlsxPath);
    }

    importInvalidFile(){
        cy.get(locator.importFile).selectFile(unsupportedPath);
    }

    errorInvalidImport(){
        cy.get(locator.genericBtn).contains('Okay').should('be.visible')
    }

    importValidValidation(){
        cy.get(locator.genericBtn).contains('Okay').should('not.exist')
    }

    errorImportNoInput(){
        cy.contains('No Data Imported').should('be.visible').and('be.exist')
    }

    clickButtonDownload(){
        cy.get(locator.buttonBtn).contains('Download').click()
        cy.verifyDownload('.xlsx', { contains: true });
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
        cy.get('.justify-end > :nth-child(2)').click()
        cy.verifyDownload('.xlsx', { contains: true });
    }

    filterMenuSearch(){
        cy.get('.justify-end > :nth-child(3)').click()
        cy.get(locator.rowTable).should('contain', 'Indonesia');
    }

    sortingTable(){
        cy.get(locator.tableHeader).contains('Area').click();
        cy.get(locator.rowTable).eq(1).should('match', /^\s*1/);
    }
}