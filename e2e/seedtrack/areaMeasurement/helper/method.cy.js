import { Locator } from "./locator.cy";

const locator = new Locator();

export class Method {
  searchAction() {
    cy.get(locator.inputSearch).click().type('G-DKHMWGPPUQ');
    cy.get(locator.tableAM).should('contain', 'G-DKHMWGPPUQ');
    cy.get(locator.rowTable).eq(1).should('contain', 'G-DKHMWGPPUQ');
  }

  searchUnexistData() {
    cy.get(locator.inputSearch).click().type('no data');
    cy.get(locator.tableAM).should('not.contain', 'no data');
    cy.get(locator.tableAM).find(locator.rowTable).should('have.length', 1);
  }

  checkPagination() {
    cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('2').click()
    cy.get(locator.paginationDesc).should('contain', 'Show 2-')
    cy.wait(1000)
    cy.get(locator.buttonBtn).find(locator.paginationBtnContent).contains('1').click()
    cy.get(locator.paginationDesc).should('contain', 'Show 1-')
    cy.wait(1000)
}

  sortingData() {
    cy.get(locator.tableHeader).contains('Grower Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'G-DKHMWGPPUQ').and('contain', 15);
    cy.wait(500)
    cy.get(locator.tableHeader).contains('Grower Code').click();
    cy.get(locator.rowTable).eq(1).should('contain', 'GG').and('contain', 1);
    cy.wait(500)
  }

  refreshTable(){
    cy.get(locator.genericBtn).contains('Refresh').click()
    cy.wait(1500)
  }

  filterMenuForm(){
    cy.get('.grid.w-full > button:nth-of-type(2)').contains('Filter').click()
    cy.wait(500)
    cy.get(locator.form).should('be.exist')
  }

  filterMenuInput(){
    cy.get(locator.inputCode).type('G-DKHMWGPPUQ')
    cy.get(locator.inputName).type('n 228')
  }

  filterMenuReset(){
    cy.get(locator.buttonBtn).contains('Reset').click()
    cy.get(locator.inputCode).should('have.value', '')
    cy.get(locator.inputName).should('have.value', '')
}

  filterMenuDownload(){
    cy.get('.justify-end > :nth-child(2)').click()
    cy.verifyDownload('.xlsx', { contains: true });
  }

  filterMenuSearch(){
    cy.get('.justify-end > :nth-child(3)').click()
    cy.get(locator.rowTable).should('contain', 'G-DKHMWGPPUQ');
    cy.get(locator.rowTable).eq(1).should('contain', 'n 228');
  }

  validateHistory(){
    cy.get(locator.genericBtn).contains('History').click()
    cy.get(locator.history).should('be.exist')
  }

  validateHistoryDownlaod(){
    cy.get(locator.rowTable).eq(2).should('contain', 'Sheva Update');
  }

  filterListTable(){
    cy.get(locator.genericBtn).contains('View Filter Column').click()
    cy.wait(500)
    cy.get(locator.checkbox).eq(0).uncheck()
    cy.get(locator.checkbox).eq(3).uncheck()
    cy.wait(500)
  }

  filterListTableValidate(){
    cy.get(locator.tableHeader).contains('No').should('not.exist');
    cy.get(locator.tableHeader).contains('Country').should('not.exist');
  }
}
