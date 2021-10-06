//Exercise #1
//Write a function that loops over the following array of TKH students
// and prints out their name and what class they are currently in.
console.log('Exercise 1');
const students = [
	'Angel',
	'Ayman',
	'David',
	'Diana',
	'Ezra',
	'Jahaziel',
	'Jennifer',
	'Julian',
	'Katherine',
	'Leesel',
	'Naeem',
	'Nashid',
	'Quiana',
	'Shafee',
	'Shan',
	'Stephanie',
	'Tinesha',
	'Zipporah'
];
const courses = [ 'Web Development', 'CS' ];

function TKH(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		console.log(`${arr1[i]} is in the ${arr2[0]} class.`);
	}
}

TKH(students, courses);

//Exercise #2
//Write a function named calculateDogAge that:
//takes one argument: your puppy's age
//calculates your dog's age based on the conversion rate of
// 1 human year to 7 dog years
//outputs the result to the screen like so:
//"Your dog is something years old in dog years"
//call the function with different sets of values
//Add an additional argument to the function that takes the conversion
//rate of human to dog years
console.log('\n Exercise 2');
function calculateDogAge(puppyAge) {
	let age = puppyAge * 7;
	console.log(`Your dog is ${age} in dog years`);
}
calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(12);
calculateDogAge(5);

//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number
console.log('\n Exercise 3');
function calculateSupply(product, age, numPerDay) {
	var maxAge = 100;
	var totalNeeded = numPerDay * 365 * (maxAge - age);
	console.log(`You will need ${totalNeeded} ${product} to last until you're ${maxAge} years old`);
}

calculateSupply('yogurt cups', 25, 2);
calculateSupply('bags of tea', 25, 1);
calculateSupply('cups of water', 25, 8);

//Exercise #4
//http://math2.org/math/geometry/circles.htm
//
//Create 2 functions that calculate properties of a circle:
//First: Create a function called calcCircumference
// - Pass the radius to the function
// - Calculate the circumference based on the radius
// - and output " The circumference is SOMETHING"
// Second: Create a function called calcArea:
// - Pass the radius to the function
// - Calculate the area based on the radius and output "The area is SOMETHING"
console.log('\n Exercise 4');
function calcCircumference(radius) {
	var circumference = Math.PI * 2 * radius;
	console.log('The circumference is ' + circumference);
}
function calcArea(radius) {
	var area = Math.PI * radius ** 2;
	console.log('The area is ' + area);
}
calcCircumference(3);
calcArea(3);
//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
console.log('\n Exercise 5');
function celsiusToFahrenheit(celsius) {
	let convertedTemp = celsius * 9 / 5 + 32;
	console.log(`${celsius} degrees Celsius is ${convertedTemp} degrees Fahrenheit`);
}
celsiusToFahrenheit(4);

function fahrenheitToCelsius(fahrenheit) {
	let convertedTemp = (fahrenheit - 32) * 5 / 9;
	console.log(`${fahrenheit} degrees Fahrenheit is ${convertedTemp} degrees Celsius`);
}
fahrenheitToCelsius(65);
//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3
console.log('\n Exercise 6');
function total(num1, num2, num3) {
	return (num1 * num2) ** num3;
}
console.log(`The product of two integers raised to the power of a third integer is ${total(1, 2, 3)}`);
