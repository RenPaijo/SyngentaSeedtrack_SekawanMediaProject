export class Locator {

	//data master - questionnaire
	tableSeedProduction = 'tbody';

	//button
	genericBtn = 'button'
	submitBtn = 'button[type="submit"]'
	buttonBtn = 'button[type="button"]'
	actionBtn = 'button[aria-haspopup="menu"]'

	//input
	inputSearch = 'input[placeholder="Type to search"]';
    inputWeight = "[name='SurveyTypeWeight']"
	inputCategory = "[name='SurveyTypeCat']";
	inputName = "[name='SurveyTypeName']";
	importFile = '#small-file-input';
	selectDropdown = '.css-qr46ko';
	valueSelect = '.grid.p-4 > div:nth-of-type(1) .text-sm';
	valueSelect2 = '.grid.p-4 > div:nth-of-type(2) .text-sm'
	resetSelect = '.css-1vbg55u-indicatorContainer';

	//dropdown
	dropdown = 'div[role="menu"]'
	pdf = "[role='menu'] > button:nth-of-type(1)"
	csv = "[role='menu'] > button:nth-of-type(2)"
	
	//modals selector for specific action


	//generic modals parts
	form = '.py-4'

	form1 = 'form'


	//filter
	filter = '.underline'
	checkbox = 'input[type="checkbox"]'


	//generic datatable parts
	tableHeader = 'thead'
	tableBody = 'tbody'
	rowTable = 'tr'
    dataTable = 'td'
	descendedArrow = 'th[class="sorting_desc"]';
	ascendedArrow = 'th[class="sorting_asc"]';
	inactiveArrow = 'th[class="sorting"]'
	paginationBtnContent = 'span[class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"]';
	paginationDesc = 'p[class="block antialiased font-sans px-4 font-normal text-sm text-gray-400"]'

	//elements that has no unique identifier
	modalTitleAdd = 'p[class="trans-text-lg"]'
	modalClose = 'svg[class="cursor-pointer"]'
	modalCon = '#myModal'
	modalConTitle = '.trans-modal-title'
	modalConBody = '.trans-modal-body'
	modalConfirmDelete = 'div[data-headlessui-state="open"]';
	modalBodyConfirmDelete = 'p[class="text-sm text-gray-500 w-full text-center"]'
	exportDropdown = 'button[role="menuitem"]'
	modalErrorImport = '#headlessui-dialog-panel-\:r2c\:'
}
