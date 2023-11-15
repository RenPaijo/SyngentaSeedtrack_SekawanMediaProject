export class Locator {

	//data master - cropsfieldcode
	dataMaster = 'Master Data';
	btnCrops = 'Master Crops';
	tableCrops = 'tbody';

	//button
	genericBtn = 'button'
	submitBtn = 'button[type="submit"]'
	buttonBtn = 'button[type="button"]'
	actionBtn = 'button[aria-haspopup="menu"]'

	//input
	inputSearch = 'input[placeholder="Type to search"]';
	inputCode = 'input[name="CropCode"]';
	inputName = 'input[name="CropName"]';
	importFile = '#small-file-input'

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
	modalCon = 'div[id*="headlessui-dialog-panel"]'
	modalConTitle = 'h3[id*="headlessui-dialog-title"]'
	modalConBody = '.trans-modal-body'
	modalBodyConfirm = 'p[class="text-sm text-gray-500 w-full text-center"]'
	exportDropdown = 'button[role="menuitem"]'
}
