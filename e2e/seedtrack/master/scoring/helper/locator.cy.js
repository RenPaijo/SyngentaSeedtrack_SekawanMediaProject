export class Locator {

	//data master - cropsfieldcode
	tableScoring = 'tbody';

	//button
	genericBtn = 'button'
	submitBtn = 'button[type="submit"]'
	buttonBtn = 'button[type="button"]'
	actionBtn = 'button[aria-haspopup="menu"]'

	//input
	inputSearch = 'input[placeholder="Type to search"]';
	inputSelect = '.css-15aq8md';
	selectDropdown = '.css-1laf4ja-menu';
	valueSelect = '.css-1n0qa22';
	inputName = 'input[name="ScoringParameterName"]';
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

	//elements that has no unique identifier
	modalTitleAdd = 'p[class="trans-text-lg"]'
	modalTitleImport = 'p[class="font-medium text-sm"]'
	modalClose = 'svg[class="cursor-pointer"]'
	modalCon = '#myModal'
	modalConTitle = '.trans-modal-title'
	modalConBody = '.trans-modal-body'
	modalConfirmDelete = 'div[data-headlessui-state="open"]';
	modalBodyConfirmDelete = 'p[class="text-sm text-gray-500 w-full text-center"]'
}