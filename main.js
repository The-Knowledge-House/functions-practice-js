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

function nameClass(arry) {
  for (let i = 0; i < arry.length; i++) {
    console.log(arry[i] + " is in the Web Development track")
  }
}
nameClass(students)



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

function calculateDogAge(pupAge, humanAge) {
  pupAge *= 7;
  console.log("Your dog is " + pupAge + " years old in dog years")
  humanAge /= 7;
  console.log("Your dog is " + Math.floor(humanAge) + " years old in human years")
}

calculateDogAge(4, 60);



//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age, amount) {
  let benchmark = 90;
  let amountPerDay = (amount * 365) * (benchmark - age);
  console.log("You will need " + amountPerDay + " to last you until the age of " + benchmark)
}

calculateSupply(40, 30)

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
  let circum = 2 * Math.PI + radius;
  console.log(" The circumference is " + circum)
}
calcCircumference(5);

function calcArea(radius) {
  let area = Math.PI * (radius * radius)
  console.log(" The area is " + area);
}
calcArea(5);


//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

function celsiusToFahrenheit(celsius) {
  let celsiusToFar = (celsius * (9 / 5) + 32);
  console.log(celsius + " in celsius is " + celsiusToFar + " in Farenheit")
}
celsiusToFahrenheit(34)

function fahrenheitToCelsius(farenheit) {
  let farToCel = (farenheit - 32) * (5 / 9);
  console.log(farenheit + " in farenheit is " + farToCel + " in celsius")
}
fahrenheitToCelsius(93);


//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function math(num1, num2, power) {
  let product = Math.pow(num1 * num2, power)
  return product
}

console.log(math(1, 2, 3))