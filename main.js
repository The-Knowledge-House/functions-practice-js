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

function tkhClass(array) {
  //Randomizes the assignment of each class to a person and then pushes the result to our new array
  let newArray = [];
  for (i = 0; i < array.length; i++){
    let ranClas = Math.floor(Math.random() * 3);
    switch (ranClas) {
      //case starts at 0 since random goes from 0 till 3 or in this case 2
      case 0:
        newArray.push(array[i] + "- PWD");
      case 1:
        newArray.push(array[i] + "- DS");
      case 2:
        newArray.push(array[i] + "- CyberSec");
    }
  }
  return newArray;
}
console.log(tkhClass(students));





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
function calculateDogAge(humanAge, puppyAge) {
  let dogYears = humanAge * 7;
  let humanYears = puppyAge* 7;
  console.log (`Your dog is ${dogYears} in dog years`);
  console.log (`Your age in dog years is: ${humanYears}`);
}
calculateDogAge(6, 11);
calculateDogAge(11, 6);
calculateDogAge(8,5);




//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number
function calculateSupply(age, amountPerDay) {
  //Makes sure we are unable to reach a lifespan that is too large
  let maxAge = 100;
  //Uses math round to make sure it rounds to the nearest whole number
  //You subtract the given age from the benchmark age
  //Multiply that by the amount per day in a year
  let amountConsumed = Math.round((maxAge - age) * (amountPerDay * 365));
  console.log(`You will need ${amountConsumed} burgers to last you until ${maxAge}`);
}
calculateSupply(33, 3);
calculateSupply(20, 2.5);
calculateSupply(10.5, 4);








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
let radius = 3;
function calcCircumference(radius) {
  console.log(`The circumference is ${radius * 2 * Math.PI}`);
}
function calcArea(radius) {
  console.log(`The Area is ${Math.PI*radius**2}`)
}
calcCircumference(radius);
calcArea(radius)










//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * (9 / 5)) + 32;
  console.log(`${celsius} degrees Celsius is ${fahrenheit} degrees Fahrenheit`);
}
function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  console.log(`${fahrenheit} degrees Fahrenheit is ${celsius} degrees Celsius`);
}
celsiusToFahrenheit(30);
fahrenheitToCelsius(86);






//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3
function threeNums(one, two, three) {
  let result = (one * two) ** three;
  return result;
}
console.log("The result of the three numbers is: " + threeNums(1, 2, 3));