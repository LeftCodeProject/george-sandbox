// Create a constructor for Billionaire objects:
function Billionaire(name,income,taxPaid){

	this.name = name;
	this.income = income;
	this.taxPaid = taxPaid;
	this.taxAsPercentage = (taxPaid / income) * 100;

};

class Bastard extends Billionaire {
	constructor(name, income, taxPaid, evilness){
		super(name, income, taxPaid);
		this.evilness = evilness;
	}
	
}

// Create an array to hold all the billionaires:
const billionaires = [];

// Create the billionaires:
billionaires.push(new Billionaire("Jeff Bezos",24345435435403.72,123.45));
billionaires.push(new Billionaire("Mr Moneybags",9098398479842.65,3857.76));
billionaires.push(new Billionaire("Dr Evil",3945384795873,459.56));
billionaires.push(new Billionaire("Jeff Bezos",349549375983745.44,756.45));
billionaires.push(new Bastard("Mr Really Bad",6322332745.44,346.45,200));