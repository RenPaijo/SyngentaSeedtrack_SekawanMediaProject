import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MSASP_001() {
		method.searchAction();
	}

	// add data
	SYNST_MSASP_002() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.checkValueInputForm();
		method.submitForm();
		method.confirmAddForm();
		method.confirmSavedData();
		method.checkSavedData();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MSASP_003() {
		method.clickAddBtn();
		method.submitForm();
		method.checkEmptyWarning();
	}

	SYNST_MSASP_004() {
		method.clickAddBtn();
		method.inputFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MSASP_005(){
		method.selectData();
		method.clickEditDropdown();
		method.checkValueInputForm();
		method.changeValue();
		method.submitForm();
		method.confirmAddForm();
		method.confirmEditedData();
		method.checkIfNewDataEdited();
	} 

	SYNST_MSASP_006(){
		method.selectData();
		method.clickDeleteDropdown();
		method.confirmDeleteData();
		method.checkIfDataGone();
	}

	SYNST_MSASP_009() {
		method.sortingData();
	}

	SYNST_MSASP_011() {
		method.selectData();
		method.clickEditDropdown();
		method.resetSelect();
	}

}
