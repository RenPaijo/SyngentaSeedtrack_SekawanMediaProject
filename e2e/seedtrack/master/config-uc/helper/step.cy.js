import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMCUC_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMCUC_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMCUC_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MMCUC_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMCUC_005(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmAddForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MMCUC_006(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MMCUC_007(){
		method.checkPagination();
	}

	SYNST_MMCUC_009() {
		method.sortingData();
	}

	SYNST_MMCUC_011() {
		method.selectData();
		method.clickEditDropdown();
		method.resetSelect();
	}

}
