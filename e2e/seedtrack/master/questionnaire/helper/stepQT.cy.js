import { Method } from "./methodQT.cy";

const method = new Method();

export class Step{
    // Add data valid questionnaire type
    SYNST_MQ_001(){
        method.clickAddBtn();
        method.inputFormValid1();
        method.checkValueInputValid1();
        method.submitForm();
        method.confrimAddForm();
        method.checkSavedDataValid();
    }

    // Add data no input questionnaire type
    SYNST_MQ_002(){
        method.clickAddBtn();
        method.submitForm();
        cy.wait(1000)
        method.requiredErrorFrom();
    }

    // Edit data valid
    SYNST_MQ_003(){
        method.selectData();
        method.clickEditDropdown();
        method.checkValueInputValid1();
        method.changeValue();
        method.checkedEditInput();
        method.submitForm();
        method.confrimAddForm();
        method.checkEditDataValid();
    }

    // Edit data invalid
    SYNST_MQ_004(){
        method.selectData2();
        method.clickEditDropdown();
        method.changeValueInvalid();
        method.submitForm();
        method.requiredEditInvalid();
    }

    // Search valid
    SYNST_MQ_005(){
        method.searchValid();
    }

    // Search invalid
    SYNST_MQ_006(){
        method.searchInvalid();
    }

    // Refresh
    SYNST_MQ_007(){
        method.refreshTable();
    }

    // Delete data
    SYNST_MQ_008(){
        method.selectData1();
        method.clickDeleteDropdown();
        method.confirmDeleteData();
        method.checkIfDataGone();
    }

    // Paginasi table
    SYNST_MQ_009(){
        method.checkPagination();
    }

    // Validasi sorting
    SYNST_MQ_010(){
        method.sortingTable();
    }

    // Validasi inputan sama dengan yang di tampilkan pada tabel
    SYNST_MQ_011(){
        method.checkSavedDataValid();
    }
}