import { Locator } from "./locator.cy";

const locator = new Locator();

export class Method {
  searchAction() {
    cy.get(locator.inputSearch).click().type('Sheva');
    cy.get(locator.tableSa).should('contain', 'Sheva');
    cy.get(locator.tableSa).find(locator.rowTable).should('have.length', 1);
    cy.get(locator.rowTable).eq(2).should('contain', 'Sheva');
  }

  searchUnexistData() {
    cy.get(locator.inputSearch).click().type('no data');
    cy.get(locator.tableSa).should('not.contain', 'no data');
    cy.get(locator.tableSa).find(locator.rowTable).should('have.length', 1);
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
    cy.get(locator.tableHeader).contains('Survey Date').click();
    cy.get(locator.tableHeader).contains('Survey Date').click();
    cy.get(locator.rowTable).eq(2).should('contain', 'Tes');
    cy.get(locator.tableHeader).contains('Survey Date').click();
    cy.get(locator.rowTable).eq(2).should('contain', 'Aaa');
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
    cy.get(locator.inputName).type('Sheva')
    cy.get(locator.inputAddress).type('Malang')
  }

  filterMenuReset(){
    cy.get(locator.buttonBtn).contains('Reset').click()
    cy.get(locator.inputName).should('have.value', '')
    cy.get(locator.inputAddress).should('have.value', '')
}

  filterMenuDownload(){
    cy.get('.justify-end > :nth-child(2)').click()
    cy.verifyDownload('.xlsx', { contains: true });
  }

  filterMenuSearch(){
    cy.get('.justify-end > :nth-child(3)').click()
    cy.get(locator.rowTable).should('contain', 'Sheva');
    cy.get(locator.rowTable).eq(2).should('contain', 'Malang');
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
    cy.wait(200)
    cy.get(locator.checkbox).eq(0).uncheck()
    cy.get(locator.checkbox).eq(2).uncheck()
    cy.wait(500)
  }

  filterListTableValidate(){
    cy.get(locator.tableHeader).contains('No').should('not.exist');
    cy.get(locator.tableHeader).contains('Field Trip').should('not.exist');
  }
}
