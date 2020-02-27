// Get a reference to the <select> element:
var billionaireSelector = document.getElementById('billionaireSelector');

// Get references to the elements that display the info:
var billionaireName = document.getElementById('billionaireName');
var totalIncomeDisplay = document.getElementById('totalIncome');
var taxPaidDisplay = document.getElementById('taxPaid');
var taxAsPercentageDisplay = document.getElementById('taxAsPercentage');

// Add the options to the billionaire selector:
var optionsDocFrag = document.createDocumentFragment();

for (var i = 0; i < billionaires.length; i++) {

	var newOption = document.createElement("option");
	
	var optionName = document.createTextNode(billionaires[i].name);
	
	newOption.appendChild(optionName);

	newOption.value = i;

	optionsDocFrag.appendChild(newOption);

}

billionaireSelector.appendChild(optionsDocFrag);

// Run the update info function:
updateDisplayedTaxInfo();

// Function to update the displayed tax information:
function updateDisplayedTaxInfo(){

	var selectedBillionaireIndex = billionaireSelector.value;

	var billionaire = billionaires[selectedBillionaireIndex];

	billionaireName.innerHTML = billionaire.name;

	totalIncomeDisplay.innerHTML = billionaire.income;
	taxPaidDisplay.innerHTML = billionaire.taxPaid;
	taxAsPercentageDisplay.innerHTML = (billionaire.taxPaid / billionaire.income) * 100;

};