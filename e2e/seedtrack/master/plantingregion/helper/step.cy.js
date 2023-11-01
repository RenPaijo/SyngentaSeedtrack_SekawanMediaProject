import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMPR_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMPR_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMPR_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMPR_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMPR_005() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMPR_006() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMPR_009(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	} 	

	SYNST_MMPR_010(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmAddForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMPR_011(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMPR_012(){
		method.checkPagination();
	}

	SYNST_MMPR_014() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmFailedData();
		method.checkSavedData();
	}

	SYNST_MMPR_015() {
		method.sortingData();
	}

	SYNST_MMPR_018() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData()
	}

	SYNST_MMPR_019() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

}
