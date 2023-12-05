import { Method } from './method.cy';

const method = new Method();

export class Step {
	// search data
	SYNST_SSA_001(){
		method.searchAction();
	}

	// Search invalid data
	SYNST_SSA_002(){
		method.searchUnexistData();
	}

	// Pagination table
	SYNST_SSA_003(){
		method.checkPagination();
	}

	// Sorting data
	SYNST_SSA_004(){
		method.sortingData();
	}

	// Refresh table
	SYNST_SSA_005(){
		method.refreshTable();
	}

	// FIlter menu reset
	SYNST_SSA_006_1(){
		method.filterMenuForm();
		method.filterMenuInput();
		method.filterMenuReset();
	}

	// Filter menu download
	SYNST_SSA_006_2(){
		method.filterMenuForm();
		method.filterMenuInput();
		method.filterMenuDownload();
	}

	// Filter menu search
	SYNST_SSA_006_3(){
		method.filterMenuForm();
		method.filterMenuInput();
		method.filterMenuSearch();
	}

	// Validate history menu
	SYNST_SSA_007(){
		method.filterMenuForm();
		method.filterMenuInput();
		method.filterMenuDownload();
		method.validateHistory();
		// method.validateHistoryDownlaod();
	}

	// Validate column view
	SYNST_SSA_008(){
		method.columnView();
		method.filterHeaderTable();
		method.filterListTableValidate();
	}

	// Uplaod form valid
	SYNST_SSA_009(){
		method.uploadForm();
	}

	// Uplaod form valid
	SYNST_SSA_010(){
		method.uploadForm();
	}

	// Upload form ni input
	SYNST_SSA_011(){
		method.uploadForm();
	}
}
