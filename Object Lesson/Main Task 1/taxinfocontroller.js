// Get a reference to the <select> element:
var billionaireSelector = document.getElementById('billionaireSelector');

// Get references to the elements that display the info:
var billionaireName = document.getElementById('billionaireName');
var totalIncomeDisplay = document.getElementById('totalIncome');
var taxPaidDisplay = document.getElementById('taxPaid');
var taxAsPercentageDisplay = document.getElementById('taxAsPercentage');

// Run the update info function:
updateDisplayedTaxInfo();

// Function to update the displayed tax information:
function updateDisplayedTaxInfo(){

	var billionaire = billionaireSelector.value;

	billionaireName.innerHTML = billionaire;

	switch (billionaire){

		case "Montgomery Burns":
			totalIncomeDisplay.innerHTML = burnsIncome;
			taxPaidDisplay.innerHTML = burnsTaxPaid;
			taxAsPercentageDisplay.innerHTML = (burnsTaxPaid / burnsIncome) * 100; 			
			break;

		case "Mr Moneybags":
			totalIncomeDisplay.innerHTML = moneybagsIncome;
			taxPaidDisplay.innerHTML = moneybagsTaxPaid;	
			taxAsPercentageDisplay.innerHTML = (moneybagsTaxPaid / moneybagsIncome) * 100; 						
			break;

		case "Dr Evil":
			totalIncomeDisplay.innerHTML = evilIncome;
			taxPaidDisplay.innerHTML = evilTaxPaid;	
			taxAsPercentageDisplay.innerHTML = (evilTaxPaid / evilIncome) * 100; 			
			break;

		case "Jeff Bezos":
			totalIncomeDisplay.innerHTML = bezosIncome;
			taxPaidDisplay.innerHTML = bezosTaxPaid;	
			taxAsPercentageDisplay.innerHTML = (bezosTaxPaid / bezosIncome) * 100; 			
			break;

	}

};