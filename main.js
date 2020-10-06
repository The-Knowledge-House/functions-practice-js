//Exercise #1
//Write a function that loops over the following array of TKH students
// and prints out their name and what class they are currently in.
const students = [
  "Angel",
  "Ayman",
  "David",
  "Diana",
  "Ezra",
  "Jahaziel",
  "Jennifer",
  "Julian",
  "Katherine",
  "Leesel",
  "Naeem",
  "Nashid",
  "Quiana",
  "Shafee",
  "Shan",
  "Stephanie",
  "Tinesha",
  "Zipporah",
];
const courses = ["Data", "Web-Dev"];

function TKH(arr1, arr2) {
  for (let index = 0; index < arr1.length; index++) {
    console.log(`${arr1[index]} is in the ${arr2[1]} class.`);
    // return `${students[index]} is in the ${courses[index]} class.`;
  }
}
// console.log(TKH(students, courses));
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
const puppyAge = 1.5;
// const humanAge = 28;

function calculateDogAge(puppyAge) {
  let ageConvert = puppyAge * 7;
  return `Your dog is ${ageConvert} years old in dog years.`;
}
console.log(calculateDogAge(puppyAge));

//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number
function calculateSupply(age, amountPerDay) {
  let maxAge = 150;
  return `You will need ${
    amountPerDay * 365 * (maxAge - age)
  } something to last you until the age of ${maxAge}.`;
}
console.log(calculateSupply(28, 36));
console.log(calculateSupply(28, 400));

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
function calcCircumference(radius) {
  return `The circumference is ${Math.floor(Math.PI * (2 * radius))}.`;
}
console.log(calcCircumference(32));

function calcArea(radius) {
  return `The area is ${Math.floor(Math.PI * (radius * radius))}.`;
}
console.log(calcArea(32));

function calcCircle(radius) {
  return `The circumference is ${Math.floor(
    Math.PI * (2 * radius)
  )} and the area is ${Math.floor(Math.PI * (radius * radius))}.`;
}
console.log(calcCircle(32));

//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
function celsiusToFahrenheit(celsius) {
  return `${celsius}°C is ${(celsius * 9) / 5 + 32}°F.`;
}
console.log(celsiusToFahrenheit(32));

function fahrenheitToCelsius(fahrenheit) {
  return `${fahrenheit}°F is ${((fahrenheit - 32) * 5) / 9}°C.`;
}
console.log(fahrenheitToCelsius(89.6));

//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function toThePower(num1, num2, num3) {
  return Math.pow(num1 * num2, num3);
}
console.log(toThePower(1, 2, 3));
