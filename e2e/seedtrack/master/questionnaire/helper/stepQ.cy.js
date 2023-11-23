import { Method } from "./methodQ.cy";

const method = new Method();

export class Step{
    // Add data valid questionnaire
    SYNST_MQ_012(){
        method.clickAddBtn();
        method.inputFormValid();
        method.checkValueInputValid();
        // method.submitForm();
        // method.confrimAddForm();
        // method.checkSavedDataValid();
    }

    // Add data no input questionnaire
    SYNST_MQ_013(){
        method.clickAddBtn();
        method.submitForm();
        cy.wait(1000)
        method.requiredErrorFrom();
    }

    // Edit data valid
    SYNST_MQ_014(){
        method.selectData();
        method.clickEditDropdown();
        method.checkValueInputValid();
        method.changeValue();
        method.checkedEditInput();
        method.submitForm();
        method.confrimAddForm();
        method.checkEditDataValid();
    }

    // Edit data invalid
    SYNST_MQ_015(){
        method.selectData2();
        method.clickEditDropdown();
        method.changeValueInvalid();
        method.submitForm();
        method.requiredEditInvalid();
    }

    // Search valid
    SYNST_MQ_016(){
        method.searchValid();
    }

    // Search invalid
    SYNST_MQ_017(){
        method.searchInvalid();
    }

    // Refresh
    SYNST_MQ_018(){
        method.refreshTable();
    }

    // Delete data
    SYNST_MQ_019(){
        method.selectData();
        method.clickDeleteDropdown();
        method.confirmDeleteData();
        method.checkIfDataGone();
    }

    // Paginasi table
    SYNST_MQ_020(){
        method.checkPagination();
    }

    // Validasi sorting
    SYNST_MQ_021(){
        method.sortingTable();
    }

    // Validasi inputan sama dengan yang di tampilkan pada tabel
    SYNST_MQ_022(){
        method.checkSavedDataValid();
    }
}