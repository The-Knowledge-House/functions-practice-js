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
function printStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " is in Progressive Web Dev");
  }
}
printStudents(students);

//Exercise #2
//Write a function named calculateDogAge that:1
//takes one argument: your puppy's age
//calculates your dog's age based on the conversion rate of
// 1 human year to 7 dog years
//outputs the result to the screen like so:
//"Your dog is something years old in dog years"
//call the function with different sets of values
//Add an additional argument to the function that takes the conversion
//rate of human to dog years
function calculateDogAge(age) {
  let dogYears = 7 * age;
  console.log("Your doggie is " + dogYears + " years old in dog years!");
}
calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age, numPerDay) {
  let maxAge = 100;
  let totalNeeded = numPerDay * 365 * (maxAge - age);
  let message =
    "You will need " +
    totalNeeded +
    " cups of tea to last you until the ripe old age of " +
    maxAge;
  console.log(message);
}
calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);

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
function calcCircumference(r) {
  let circum = (Math.PI * r) ^ 2;
  console.log("The circumference is " + circum);
}
calcCircumference(100);

function calcArea(r) {
  let area = Math.PI * r * r;
  console.log("The area is " + area);
}
calcArea(100);
2 * r;

//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
function fahrenheitToCelsius(F) {
  let c = ((F - 32) * 5) / 9;
  console.log(F + "°F is " + c + "°C");
}
function celsiusToFahrenheit(c) {
  let F = (c * 9) / 5 + 32;
  console.log(c + "°C is " + F + "°F");
}
celsiusToFahrenheit(34);

function fahrenheitToCelsius(F) {
  let c = ((F - 32) * 5) / 9;
  console.log(F + "°F is " + c + "°C");
}
fahrenheitToCelsius(60);

//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3
function three(a, b, c) {
  return (a * b) ^ c;
}
console.log(three(1, 2, 3));
(1 * 2) ^ 3;
