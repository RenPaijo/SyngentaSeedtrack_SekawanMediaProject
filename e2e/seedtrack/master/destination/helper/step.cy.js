import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMD_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMD_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMD_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMD_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMD_005() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMD_006() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMD_009(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	} 	

	SYNST_MMD_010(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmEditForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMD_011(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMD_012(){
		method.checkPagination();
	}

	SYNST_MMD_014() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmFailedData();
		method.checkSavedData();
	}

	SYNST_MMD_015() {
		method.sortingData();
	}

	SYNST_MMD_018() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData()
	}

	SYNST_MMD_019() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

}
