import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data

	// add data
	SYNST_MM_001() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	SYNST_MM_002() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MM_003() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.clearAnInput();
	}

	SYNST_MM_004(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmEditForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	}

	SYNST_MM_005(){
		method.selectData();
		method.clickEditDropdown();
		method.clearAnInput();
	} 

	SYNST_MM_006() {
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MM_007() {
		method.searchAction();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MM_008() {
		method.searchUnexistData();
	}

	SYNST_MM_009(){
		method.checkPagination();
	} 	

	SYNST_MM_011() {
		method.sortingData();
	}

	SYNST_MM_014() {
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MM_015() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MM_016() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData()
	}

	SYNST_MM_017() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

}
