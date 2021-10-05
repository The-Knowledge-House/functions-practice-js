//Exercise #1
//Write a function that loops over the following students of TKH students
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
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  console.log(`${element} is in Web Development`);
};




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

const calculateDogAge = (puppysAge, yourAge) => {
  let dogAge = puppysAge * 7;
  let humanAge = yourAge / 7;
  if (humanAge > 0){
    console.log(`You're age in dog years is ${humanAge}.`);
    
  } else {console.log(`You're dog is ${dogAge} years old in dog years.`);
  };
};

calculateDogAge(10, 10);
calculateDogAge(5, 5);
calculateDogAge(3, 5);






//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
  // Bonus: accept floating point values for amount per day, and round the
  // result to a round number
const calculateSupply = (age, amountPerDay) => {
  // calculates the amount consumed for the rest of the life(based on a benchmark age)
  //  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
  let year = 365;
  // let cupsDaily = 16;
  let totalAmount = ((amountPerDay * year) * age);

  console.log(`You will need ${totalAmount} daily, to last you until the age of ${age}`);
};
// Call that function several times, using different values each time
calculateSupply(25,8);
calculateSupply(50,16);
calculateSupply(75,24);







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
const pi = 3.14159265 ;
const calcCircumference = (radius) => {
  let circ = (2 * radius * pi) ;
  // console.log(`diameter = ${diameter}`);
  // let circ = pi * diameter;
  console.log(`THE CIRCUMFERENCE IS ${circ}`);
};
calcCircumference(50);

const calcArea = (radius) => {
  let circArea = (pi * (radius ** 2)) ;
  console.log(`THE AREA IS ${circArea}`);
};
calcArea(50);






//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
const celsiusToFahrenheit = (temperature) => {
  let celsius = temperature ;
  let toFahrenheit = (celsius * (9/5) + 32) ;
  console.log(`${celsius} degrees in Celsius is ${toFahrenheit} degrees Fahrenheit.`) ;
};
celsiusToFahrenheit(5);
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
const fahrenheitToCelsius = (temperature) => {
  let fahrenheit = temperature;
  let toCelsius = (fahrenheit - 32) / (9/5) ;
  console.log(`${fahrenheit} degrees in Fahrenheit is ${toCelsius} degrees Celsius.`) ;
};
fahrenheitToCelsius(41);






//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3
const toThePower = (num1, num2, num3) => {
  return ((num1 * num2) ** num3) ;
};
console.log(toThePower(1, 2, 3));