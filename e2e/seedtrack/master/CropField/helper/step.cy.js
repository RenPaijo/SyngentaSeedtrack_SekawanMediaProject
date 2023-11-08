import { Method } from "./method.cy";

const method = new Method();

export class Step {
    // Search valid
    SYNST_SSP_001(){
        method.searchValid();
    }

    // Search invalid
    SYNST_SSP_002(){
        method.searchInvalid();
    }

    // Refresh Table
    SYNST_SSP_003(){
        method.refreshTable();
    }

    // Pagination
    SYNST_SSP_004(){
        method.checkPagination();
    }

    // Filter column table
    SYNST_SSP_005(){
        method.filterColumn();
        method.validateFilterColumn();
    }

    // Sorting table
    SYNST_SSP_006(){
        method.sortingTable();
    }

    // Add data valid
    SYNST_SSP_007(){
        method.clickAddButton();
        method.addFormValid();
        method.checkValueAdd();
        method.clickSaveButton();
        method.modalSuccessInput();
        // method.checkAddInTable();
    }

    // Add data no input
    SYNST_SSP_008(){
        method.clickAddButton();
        method.clickSaveButton()
        method.errorNoInputForm();
    }

    // Edit data valid
    SYNST_SSP_009(){
        method.selectData();
        method.clickEditDropdown();
        method.changeValue();
        method.checkedEditInput();
        method.clickSaveButton();
        method.modalSuccessInput();
        method.checkEditDataValid();
    }

    // Edit data invalid
    SYNST_SSP_010(){
        method.selectData2();
        method.clickEditDropdown();
        method.changeValueInvalid();
        method.clickSaveButton();
        method.errorEditInvalid();
    }

    // Delete data
    SYNST_SSP_011(){
        method.selectData3();
        method.clickDeleteDropdown();
        method.confirmDeleteData();
        method.checkIfDataGone();
    }
}