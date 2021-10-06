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

const courses = ["Data", "PWD"]

function TKH(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]} is in the ${arr2[1]} class.`)
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


function calculateDogAge(humanAge, dogAge) {
  let human = dogAge * 7;
  let dog = humanAge * 7;
  console.log("Your dog is " + dog + " years old in dog years");
  console.log("Your age in dog years is " + human);
}
calculateDogAge(21, 40);
calculateDogAge(3, 1);
calculateDogAge(18, .5);



//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number


function calculateSupply(age, amountPerDay) {
  let maxAge = 105;
  let total = Math.round((maxAge - age) * (365 * amountPerDay));
  console.log("You will need " + total + " icecream cheesecakes to last you until the age of " + maxAge);
}
calculateSupply(50, 30);
calculateSupply(21, 10.5);
calculateSupply(15.5, 4.3);
calculateSupply(11.9, 9.1);



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


let radius = 10;
function calcCircumference(radius) {
  console.log(`The circumference is ${radius * 2 * Math.PI}`);
}
function calcArea(radius) {
  console.log(`The Area is ${Math.PI * radius * radius}`)
}
calcCircumference(radius)
calcArea(radius)



//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"


function celsiusToFahrenheit(celsius) {
  return `${celsius} degrees Celsius is ${(celsius * 1.8) + 32} degrees Fahrenheit`
}

console.log(celsiusToFahrenheit(20));

function fahrenheitToCelsius(fahrenheit) {
  return `${fahrenheit} degrees Fahrenheit is ${(fahrenheit - 32) * 5 / 9} degrees Celsius`
}

console.log(fahrenheitToCelsius(100))


//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function parameters(num1, num2, num3) {
  return Math.pow((num1 * num2), num3)
}

console.log(parameters(2, 2, 3))