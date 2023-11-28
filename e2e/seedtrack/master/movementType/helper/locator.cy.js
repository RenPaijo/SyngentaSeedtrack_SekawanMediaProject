export class Locator {

	//data master - movement type
	tableMovementType = 'tbody';

	//button
	genericBtn = 'button'
	submitBtn = 'button[type="submit"]'
	buttonBtn = 'button[type="button"]'
	actionBtn = 'button[aria-haspopup="menu"]'

	//input
	inputSearch = 'input[placeholder="Type to search"]';
	inputCode = "[placeholder='Enter Code']"
	inputOp = "[placeholder='Enter Name'][name='PsmtOperator']"
	inputRemark = "[placeholder='Enter Name'][name='PsmtRemark']"
	filterCode = "[name='PsmtCode']"
	filterOp = "[name='PsmtOperator']"

	//dropdown
	dropdown = 'div[role="menu"]'
	pdf = "[role='menu'] > button:nth-of-type(1)"
	csv = "[role='menu'] > button:nth-of-type(2)"
	
	//modals selector for specific action


	//generic modals parts
	form = '.gap-6 > .flex-1 > .flex-col'

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
	paginationDesc = '.px-3.block'

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
