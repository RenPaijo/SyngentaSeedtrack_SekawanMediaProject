import { Locator } from "./locator.cy";

const locator = new Locator();

export class Method {
  searchAction() {
    cy.get(locator.inputSearch).click().type('Wet Season');
    cy.get(locator.tableSsa).should('contain', 'Wet Season');
    cy.get(locator.tableSsa).find(locator.rowTable).should('have.length', 17);
    cy.get(locator.rowTable).eq(3).should('contain', 'Wet Season');
  }

  searchUnexistData() {
    cy.get(locator.inputSearch).click().type('no data');
    cy.get(locator.tableSsa).should('not.contain', 'no data');
    cy.get(locator.tableSsa).find(locator.rowTable).should('have.length', 1);
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
    cy.get(locator.tableHeader).contains('No').click();
    cy.get(locator.rowTable).eq(2).should('contain', 'Wet Season').and('contain', 35);
    cy.get(locator.tableHeader).contains('No').click();
    cy.get(locator.rowTable).eq(2).should('contain', 'Wet Season').and('contain', 1);
  }

  refreshTable(){
    cy.get(locator.genericBtn).contains('Refresh').click()
    cy.wait(1500)
  }

  filterMenuForm(){
    cy.get(locator.genericBtn).contains('Filter').click()
    cy.wait(500)
    cy.get(locator.form).should('be.exist')
  }

  filterMenuInput(){
    cy.get(locator.valueSelect).eq(0).click({force:true})
    cy.get(locator.selectDropdown).contains('Wet Season').click()
    cy.get(locator.valueSelect1).eq(2).click({force:true})
    cy.get(locator.selectDropdown).contains('Sheva Update').click()
  }

  filterMenuReset(){
    cy.get(locator.buttonBtn).contains('Reset').click()
    cy.get(locator.valueSelect).should('have.value', '')
    cy.get(locator.valueSelect1).should('have.value', '')
}

  filterMenuDownload(){
    cy.get('.justify-end > :nth-child(2)').click()
    cy.verifyDownload('.xlsx', { contains: true });
  }

  filterMenuSearch(){
    cy.get('.justify-end > :nth-child(3)').click()
    cy.get(locator.rowTable).should('contain', 'Wet Season');
    cy.get(locator.rowTable).eq(3).should('contain', 'Wet Season');
  }

  validateHistory(){
    cy.get(locator.genericBtn).contains('History').click()
    cy.get(locator.history).should('be.exist')
  }

  validateHistoryDownlaod(){
    cy.get(locator.rowTable).eq(2).should('contain', 'Sheva Update');
  }
}
