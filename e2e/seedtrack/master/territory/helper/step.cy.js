import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMT_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMT_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMT_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMT_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMT_005() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMT_006() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMT_009(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	} 	

	SYNST_MMT_010(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmEditForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMT_011(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMT_012(){
		method.checkPagination();
	}

	// SYNST_MMT_014() {
	// 	method.clickAddBtn();
	// 	method.inputFormAddTag();
	// 	method.submitForm();
	// 	method.confirmAddForm();
	// }

	SYNST_MMT_014() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmFailedData();
		method.checkSavedData();
	}

	SYNST_MMT_015() {
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

	SYNST_MMT_020() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

}
