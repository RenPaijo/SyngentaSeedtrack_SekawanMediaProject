export class Locator {

	//data master - cropsfieldcode
	tableVariety = 'tbody';

	//button
	genericBtn = 'button'
	submitBtn = 'button[type="submit"]'
	buttonBtn = 'button[type="button"]'
	actionBtn = 'button[aria-haspopup="menu"]'

	//input
	inputSearch = 'input[placeholder="Type to search"]';
	selectDropdown = '.css-1laf4ja-menu';
	valueSelect = '.css-1n0qa22';
	inputName = 'input[name="VarietyName"]';
	inputCode = 'input[name="VarietyCode"]';
	inputNumber = 'input[name="VarietyNumber"]';
	importFile = '#small-file-input'
	resetSelect = '.css-1vbg55u-indicatorContainer'

	//dropdown
	dropdown = 'div[role="menu"]'
	
	//modals selector for specific action


	//generic modals parts
	form = 'form'


	//error swal contents


	//generic datatable parts
	tableHeader = 'thead'
	tableBody = 'tbody'
	rowTable = 'tr';
	descendedArrow = 'th[class="sorting_desc"]';
	ascendedArrow = 'th[class="sorting_asc"]';
	inactiveArrow = 'th[class="sorting"]'
	paginationBtnContent = 'span[class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"]';
	paginationDesc = 'p[class="block antialiased font-sans px-4 font-normal text-sm text-gray-400"]'

	//elements that has no unique identifier
	modalTitleAdd = 'p[class="trans-text-lg"]'
	modalTitleImport = 'p[class="font-medium text-sm"]'
	modalClose = 'svg[class="cursor-pointer"]'
	modalCon = 'div[id*="headlessui-dialog-panel"]'
	modalConTitle = 'h3[id*="headlessui-dialog-title"]'
	modalConBody = '.trans-modal-body'
	modalBodyConfirm = 'p[class="text-sm text-gray-500 w-full text-center"]'
	exportDropdown = 'button[role="menuitem"]'
}
