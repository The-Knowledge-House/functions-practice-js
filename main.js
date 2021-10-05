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


// students.forEach(element => 
//   console.log(` ${element} of tkh`))


const course = ["Data", "PWD"]; 

function TKH(arr1, arr2) {
  for (let i =0; i<arr1.length; i++) {
    console.log(`${arr1[i]} is in the ${arr2[1]}`);
  }
}

TKH(students, course);

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


// I'm confused about this because shouldn't it take in Human years since we are trying to figure out what the dog years are? (The example is Your dog is something years old in dog years). 
function calculateDogAge(humanYears) {
let conversion = humanYears * 7; 
console.log(`Your dog is ${conversion} years old in dog years`);
}

calculateDogAge(1); 
calculateDogAge(2); 











//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age, amount) { 
  let amountConsumed = age * amount; 
  let roundConsumed = parseInt(amountConsumed);
  console.log(`You will need ${roundConsumed} to last you the age of ${age}`);
}


calculateSupply(25, 3.15); 








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

function radius(number) { 
  let radius = 2 * Math.PI * number;
  return radius;
}

function calcCircumference(rad){
  
  let circumference = 2 * Math.PI * radius(rad)
  return `The circumference is ${circumference}`
}

function calcArea(area){
let r = radius(area)
  let total = Math.PI * r * r
  return `The area is ${total}"`
}


radius(8)
calcCircumference(6)
calcArea(5)








//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"


function celsiusToFahrenheit(temp) {
  let celsiusTemp = temp; 
  let celsiusConversion = (celsiusTemp * 9/5) + 32; 
  console.log(`${celsiusTemp} degrees Celsius is ${celsiusConversion} degrees Fahrenheit` ); 

}

celsiusToFahrenheit(30); 

function fahrenheitToCelsius(temperature) {
  let fahrenheitTemp = temperature; 
  let fahrenheitConversion = (fahrenheitTemp - 32) * 5/9; 
  console.log(`${fahrenheitTemp} degrees Fahrenheit is ${fahrenheitConversion} degrees Celsius`);
}

fahrenheitToCelsius(30); 




//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function exerciseSix(one, two, three) { 
  let numConversion = (one * two);
  let raisedConversion = Math.pow(numConversion, three);
  console.log(`The answer to ${one} times ${two} to the power of ${three} is ${raisedConversion}`);
}

exerciseSix(1, 2, 3); 