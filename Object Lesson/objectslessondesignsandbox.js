
/* Without using objects: */

var towerHamletsPopulation = 345366;
var towerHamletsAverageIncome = 22300;
var towerHamletsAverageAge = 54.3;
var newhamPopulation = 340580;
var newhamAverageIncome = 21700;
var newhamAverageAge = 34.7;
var hackneyPopulation = 535347;
var hackneyAverageIncome = 24560;
var hackneyAverageAge = 45.6;

/* With objects: */

var towerHamlets = {
		
	population: 345366,
	averageIncome: 22300,
	averageAge: 54.3

};

var newham = {

	population: 340580,
	averageIncome: 21700,
	averageAge: 34.7

};

var hackney = {

	population: 535347,
	averageIncome: 24560,
	averageAge: 45.6

};

/* Predict what would happen in each of the following cases: */


var billingAddress = "23 Bakunin Blvd";

var deliveryAddress = billingAddress;

billingAddress = "13 Marx Mews";

console.log(billingAddress);

console.log(deliveryAddress);

//

console.log("\n");

//

var billingDetails = {

	address: "17 Goldman Walk"

};

var deliveryDetails = billingDetails;

billingDetails.address = "14 Kropotkin Close";

console.log(billingDetails.address);

console.log(deliveryDetails.address);

// 

console.log("\n");

// 

var customer1 = {

	name: "Steve",
	age: 27

};

var customer2 = customer1;

customer2.name = "Alan";

console.log(customer1.name);

console.log(customer2.name);

// 

var basket = {

	total: 100,
	giveDiscount: function(){

		this.total *= 0.9;

	}

};

console.log(basket.total);

basket.giveDiscount();

console.log(basket.total);