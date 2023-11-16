import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMUOM_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMUOM_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMUOM_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMUOM_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMUOM_005() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMUOM_006() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMUOM_009(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	} 	

	SYNST_MMUOM_010(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmEditForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMUOM_011(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMUOM_012(){
		method.checkPagination();
	}

	SYNST_MMUOM_014() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmFailedData();
		method.checkSavedData();
	}

	SYNST_MMUOM_015() {
		method.sortingData();
	}

	SYNST_MMUOM_018() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData()
	}

	SYNST_MMUOM_019() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

}
