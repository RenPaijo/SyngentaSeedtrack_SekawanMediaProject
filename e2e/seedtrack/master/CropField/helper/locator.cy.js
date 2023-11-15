export class Locator {

	//data master - questionnaire
	tableCropField = 'tbody';

	//button
	genericBtn = 'button'
	submitBtn = 'button[type="submit"]'
	buttonBtn = 'button[type="button"]'
	actionBtn = 'button[aria-haspopup="menu"]'

	//input
	inputSearch = 'input[placeholder="Type to search"]';
    inputCode = "[name='CropFieldCode']"
	inputHybrid = "[name='CropFieldHybrid']"
	inputYield = "[name='CropFieldTargetYield']";
	inputPlanting = "[name='CropFieldSplitPlanting']";
	inputDistance = "[name='CropFieldPlantingDistance']"
	inputRatio = "[name='CropFieldPlantingRatio']"
	inputMale = "[name='CropFieldPopulationMale']"
	inputFemale = "[name='CropFieldPopulationFemale']"
	inputPolination = "[name='CropFieldPolination']"
	inputClass = "[name='CropFieldSeedClass']"
	selectDropdown = '.css-1laf4ja-menu';
	valueSelect = '.gap-5 > div:nth-of-type(2) .h-10';
	valueSelect2 = '.gap-5 > div:nth-of-type(3) .h-10'
	valueSelect3 = '.gap-5 > div:nth-of-type(4) .h-10'
	valueSelect4 = '.gap-5 > div:nth-of-type(5) .h-10'
	valueSelect5 = '.gap-5 > div:nth-of-type(6) .h-10'
	valueSelect6 = '.gap-5 > div:nth-of-type(8) .h-10'
	resetSelect = '.css-1vbg55u-indicatorContainer';

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
	formHeader = 'p.trans-text-lg'
}
