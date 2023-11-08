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

    // Export pdf
    SYNST_SSP_005(){
        method.clickButtonExport();
        method.pdfExport();
    }

    // Export csv
    SYNST_SSP_005_1(){
        method.clickButtonExport();
        method.csvExport();
    }

    // Filter column table
    SYNST_SSP_006(){
        method.filterColumn();
        method.validateFilterColumn();
    }

    // Filter menu reset
    SYNST_SSP_007(){
        method.clickFilterMenu();
        method.filterMenuSelect();
        method.filterMenuReset();
    }

    // Filter menu download
    SYNST_SSP_008(){
        method.clickFilterMenu();
        method.filterMenuSelect();
        method.filterMenuDownload();
    }

    // Filter menu search
    SYNST_SSP_009(){
        method.clickFilterMenu();
        method.filterMenuSearch();
    }

    // Sorting table
    SYNST_SSP_010(){
        method.sortingTable();
    }

    // Add data valid with 1 reminder
    SYNST_SSP_011(){
        method.clickAddButton();
        method.addFormValid();
        method.checkValueAdd();
        method.addFormWithReminder();
        method.clickSaveButton();
        method.modalSuccessInput();
        method.checkAddInTable();
    }

    // Add data no input
    SYNST_SSP_012(){
        method.clickAddButton();
        method.clickSaveButton()
        method.errorNoInputForm();
    }

    // Edit data valid
    SYNST_SSP_013(){
        method.selectData();
        method.clickEditDropdown();
        method.checkValueAdd();
        method.changeValue();
        method.checkedEditInput();
        method.clickSaveButton();
        method.modalSuccessInput();
        method.checkEditDataValid();
    }

    // Edit data invalid
    SYNST_SSP_014(){
        method.selectData2();
        method.clickEditDropdown();
        method.changeValueInvalid();
        method.clickSaveButton();
        method.errorEditInvalid();
    }

    // Delete data
    SYNST_SSP_015(){
        method.selectData();
        method.clickDeleteDropdown();
        method.confirmDeleteData();
        method.checkIfDataGone();
    }
}