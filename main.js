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
const course = ["Data", "PWD"];

function loopOverArray(array, array2) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i] + " you're in " + array2[1]);
  }
}

loopOverArray(students, course);

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

function calculateDogAge(dogAgeInHumanYears) {
  let dogAgeInDogYears = dogAgeInHumanYears * 7;
  console.log(dogAgeInDogYears);
}
calculateDogAge(12);
calculateDogAge(6);
calculateDogAge(10);

//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age, amountPerDay) {
  // cupsOfWaterADay = 15.5
  let convertToAmountOfYears = amountPerDay * 365;
  let totalAmountNeeded = convertToAmountOfYears * age;

  console.log(
    "You will need " + totalAmountNeeded + " to last you till " + age
  );
}

calculateSupply(1, 3);

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

//Circumference of Circle = PI x diameter = 2 PI x radius
//where PI = PI = 3.141592...
//area = PI r2
function calcCircumference(radius) {
  let diameter = 2 * radius;
  let circleCircumference = 3.141592 * diameter;
  console.log("The circumference is " + circleCircumference);
}
calcCircumference(20);
calcCircumference(60);
calcCircumference(50);

function calcArea(radius) {
  let area = 3.141592 * Math.pow(radius, 2);
  console.log("The area is " + area);
}
calcArea(60);
calcArea(40);
calcArea(10);

//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

function celsiusToFahrenheit(celsTemp) {
  //you multiply the celsius value by 9/5 then add 32.
  let fahrenheit = (celsTemp * 9) / 5 + 32;
  console.log(
    celsTemp + " degrees Celsius is " + fahrenheit + "  Fahrenheit degrees"
  );
}

function fahrenheitToCelsius(fahreTemp) {
  let celsius = ((fahreTemp - 32) * 5) / 9;
  console.log(
    fahreTemp + " degrees fahrenheit is " + celsius + "  celsius degrees"
  );
}
fahrenheitToCelsius(30);
celsiusToFahrenheit(30);
//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function calculateExercise6(firstNum, secoundNum, thirdNum) {
  let result = Math.pow(firstNum * secoundNum, thirdNum);
  console.log(result);
}

calculateExercise6(1, 2, 3);
