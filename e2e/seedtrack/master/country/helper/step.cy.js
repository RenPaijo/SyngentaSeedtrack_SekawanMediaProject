import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data

	// add data
	SYNST_MC_001() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	SYNST_MC_002() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MC_003() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.clearAnInput();
	}

	SYNST_MC_004(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmAddForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	}

	SYNST_MC_005(){
		method.selectData();
		method.clickEditDropdown();
		method.clearAnInput();
	} 

	SYNST_MC_006() {
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MC_007() {
		method.searchAction();
	}

	SYNST_MC_008() {
		method.searchUnexistData();
	}

	SYNST_MC_009(){
		method.checkPagination();
	} 	

	SYNST_MC_012() {
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MC_013() {
		method.clickImportBtn();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MC_014() {
		method.clickDownloadBtn();
	}

	SYNST_MC_016() {
		method.sortingData();
	}

	SYNST_MM_017() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData()
	}

	SYNST_MC_018() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.addCharToCode();
	}

	SYNST_MC_019() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

}
