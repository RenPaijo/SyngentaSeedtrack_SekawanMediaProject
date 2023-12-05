import { Locator } from "./locator.cy";

const locator = new Locator();

export class Method {
  searchAction() {
    cy.get(locator.inputSearch).click().type('Z1B');
    cy.get(locator.tablePp).should('contain', 'Z1B');
    cy.get(locator.tablePp).find(locator.rowTable).should('have.length', 1);
    cy.get(locator.rowTable).eq(3).should('contain', 'Z1B');
  }

  searchUnexistData() {
    cy.get(locator.inputSearch).click().type('no data');
    cy.get(locator.tablePp).should('not.contain', 'no data');
    cy.get(locator.tablePp).find(locator.rowTable).should('have.length', 1);
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
    cy.get(locator.tableHeader).contains('Area').click();
    cy.get(locator.rowTable).eq(2).should('contain', 'Wet Season').and('contain', 35);
    cy.get(locator.tableHeader).contains('Area').click();
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
    cy.get(locator.selectDropdown).contains('Z1B').click()
    cy.get(locator.valueSelect).eq(4).click({force:true})
    cy.get(locator.selectDropdown).contains('Syngenta SeedTrack').click()
  }

  filterMenuReset(){
    cy.get(locator.buttonBtn).contains('Reset').click()
    cy.get(locator.valueSelect).eq(0).should('have.value', '')
    cy.get(locator.valueSelect).eq(4).should('have.value', '')
}

  filterMenuDownload(){
    cy.get('.justify-end > :nth-child(2)').click()
    cy.get('.w-96').should('contain', 'Are you sure you want to download this data?')
    cy.get(locator.submitBtn).contains('Yes').click();
    cy.wait(500)
    cy.get('.w-96').should('contain', 'Successfully')
    cy.get(locator.buttonBtn).contains('Ok').click();
  }

  filterMenuSearch(){
    cy.get('.justify-end > :nth-child(3)').click()
    cy.get(locator.rowTable).should('contain', 'Z1B');
    cy.get(locator.rowTable).eq(3).should('contain', 'Z1B');
  }

  validateHistory(){
    cy.get(locator.iconBtn).click()
    cy.get(locator.genericBtn).contains('History').click()
    cy.get(locator.history).should('be.exist')
  }

  validateHistoryDownlaod(){
    cy.get(locator.rowTable).eq(2).should('contain', 'Sheva Update');
  }

  columnView(){
    cy.get(locator.genericBtn).contains('Column View').click()
    cy.get(locator.form).should('be.exist')
  }

  filterHeaderTable(){
    cy.wait(200)
    cy.get(locator.checkbox).eq(0).uncheck()
    cy.get(locator.checkbox).eq(2).uncheck()
    cy.wait(500)
  }

  filterListTableValidate(){
    cy.get(locator.tableHeader).contains('No').should('not.exist');
    cy.get(locator.tableHeader).contains('Planting Allocation').should('not.exist');
  }

  uploadForm(){
    cy.get(locator.iconBtn).click()
    cy.get(locator.genericBtn).contains('Upload').click()
    cy.get('.scale-100').should('be.exist')
  }
}
