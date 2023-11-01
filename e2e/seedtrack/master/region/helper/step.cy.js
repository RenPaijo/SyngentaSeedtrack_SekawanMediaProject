import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMR_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMR_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMR_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMR_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMR_005() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMR_006() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMR_009(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	} 	

	SYNST_MMR_010(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmAddForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMR_011(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMR_012(){
		method.checkPagination();
	}

	// SYNST_MMR_014() {
	// 	method.clickAddBtn();
	// 	method.inputFormAddTag();
	// 	method.submitForm();
	// 	method.confirmAddForm();
	// }

	SYNST_MMR_014() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.submitForm();
		method.confirmAddForm();
		method.confirmFailedData();
	}

	SYNST_MMR_015() {
		method.sortingData();
	}

	SYNST_MMR_017() {
		method.clickActionBtn();
		method.exportAsPdf();
		method.clickActionBtn();
		method.exportAsCsv();
	}

	SYNST_MMR_019() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData()
	}

	SYNST_MMR_020() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

}
