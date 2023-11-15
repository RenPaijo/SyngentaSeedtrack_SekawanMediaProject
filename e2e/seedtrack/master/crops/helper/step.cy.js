import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMC_001() {
		method.searchAction();
	}

	SYNST_MMC_002() {
		method.clickFilterBtn();
		method.filterInputAction();
		method.filterSearchAction();
		method.filterDownloadAction();
		method.filterResetAction();
	}

	// add data
	SYNST_MMC_003() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMC_004() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMC_005() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMC_006() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMC_007() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMC_010(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	} 	

	SYNST_MMC_011(){
		method.selectData();
		method.clickEditDropdown();
		method.checkCorrectInputValue();
		method.changeValue();
		method.submitForm();
		method.confirmEditForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMC_012(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMC_014() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.inputFormAddHtmlTag();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.selectDataWithHtmlTag();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
 	}

	SYNST_MMC_015() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmFailedData();
		method.checkSavedData();
	}

	SYNST_MMC_016() {
		method.sortingData();
	}

	SYNST_MMC_019() {
		method.clickAddBtn();
		method.inputFormAddAfterDelete();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData(); 
	}

	SYNST_MMC_020() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

}
