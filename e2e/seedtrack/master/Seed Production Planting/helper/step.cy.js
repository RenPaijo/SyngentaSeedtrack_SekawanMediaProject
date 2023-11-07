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

    // Filter column
    SYNST_SSP_006(){
        method.filterColumn();
        method.validateFilterColumn();
    }

    // Import data valid
    SYNST_SSP_007(){
        method.clickImportButton();
        method.importValidFile();
        method.clickUploadButton();
        method.importValidValidation();
    }

    // Import data invalid
    SYNST_SSP_008(){
        method.clickImportButton();
        method.importInvalidFile();
        method.clickUploadButton();
        method.errorInvalidImport();
    }

    // Import tanpa menginport data
    SYNST_SSP_009(){
        method.clickImportButton();
        method.clickUploadButton();
        method.errorImportNoInput();
    }

    // Download
    SYNST_SSP_010(){
        method.clickButtonDownload();
    }

    // Filter menu reset
    SYNST_SSP_011(){
        method.clickFilterMenu();
        method.filterMenuSelect();
        method.filterMenuReset();
    }

    // Filter menu download
    SYNST_SSP_012(){
        method.clickFilterMenu();
        method.filterMenuSelect();
        method.filterMenuDownload();
    }

    // Filter menu search
    SYNST_SSP_013(){
        method.clickFilterMenu();
        method.filterMenuSearch();
    }

    // Sorting table
    SYNST_SSP_014(){
        method.sortingTable();
    }
}