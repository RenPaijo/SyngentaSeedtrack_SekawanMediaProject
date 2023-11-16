import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMVar_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMVar_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMVar_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMVar_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMVar_005() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMVar_006() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMVar_009(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	} 	

	SYNST_MMVar_010(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmEditForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMVar_011(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMVar_012(){
		method.checkPagination();
	}

	SYNST_MMVar_014() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmFailedData();
		method.checkSavedData();
	}

	SYNST_MMVar_015() {
		method.sortingData();
	}

	SYNST_MMVar_018() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData()
	}

	SYNST_MMVar_019() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

}
