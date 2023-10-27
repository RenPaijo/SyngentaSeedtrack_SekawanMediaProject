import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_MMC_001() {
		method.searchAction();
	}

	// add data
	SYNST_MMC_003() {
		method.clickAddBtn();
		method.inputCodeFormAdd();
		method.inputNameFormAdd();
		method.submitAddForm();
		method.confirmAddForm();
	}

	SYNST_MMC_002() {
		method.clickFilterBtn();
		method.filterInputAction();
		method.filterSearchAction();
		method.filterDownloadAction();
		method.filterResetAction();
	}

	// Login Aplikasi dengan Username Benar dan Password Salah
	SYNST_MMC_004() {
		method.clickAddBtn();
		method.submitAddForm();
		method.checkEmptyWarning();
	}

	SYNST_MMC_005() {
		method.clickAddBtn();
		method.inputCodeFormAdd();
		method.inputNameFormAdd();
		method.closeAddForm();
		method.clickAddBtn();
		method.checkEmptyInput();
	}

	SYNST_MMC_006() {
		method.clickDownloadBtn();
	}
    
	// Login Aplikasi dengan Username dan Password Tidak Sesuai
	SYNST_MMC_007() {
		method.clickImportBtn();
		method.importOtherXlsx();
		method.uploadImportBtn();
		method.checkModalError();
	}

	SYNST_MMC_010(){
		method.clickImportBtn();
		method.importUnsupportedFile();
		method.uploadImportBtn();
		method.checkModalError();
	}
}
