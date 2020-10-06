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

function printNameAndClass (arr) {
  const tkhClass = "Full-Stack Web Development";
  for( let item of arr) {
    console.log(`${item} is in the ${tkhClass} class.`);
  }
}

printNameAndClass(students)


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

function calculateDogAge (dogAge , conversion) {
  let humanToDogYears = dogAge * 7;
  return `Your dog is ${dogAge * conversion} years old in dogs years`;
}

console.log(calculateDogAge(4 , 10));

//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age, amountPerDay){
  const maxAge = 80;
  let supply = Math.round((amountPerDay*365)*(maxAge - age))
  return `You will need ${supply} cookies to last you until the age of ${maxAge}`
}

console.log(calculateSupply(22, 3))


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

function calcCircumference(radius){
  return `The cirfumference is ${Math.PI * radius}`
}

console.log(calcCircumference(2))

function calcArea(radius){
  return `The area is ${Math.PI * (radius * radius)}`
}

console.log(calcArea(2))

//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

function celsiusToFahrenheit(celsius){
  return `${celsius} degrees is ${(celsius * 1.8)+32} degrees fahrenheit`
}

console.log(celsiusToFahrenheit(41));

function fahrenheitToCelsius(fahrenheit){
  return `${fahrenheit} degrees is ${((fahrenheit - 32)*5)/9} degrees celsius`
}

console.log(fahrenheitToCelsius(105.8))

//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function numbers (num1, num2, num3){
  return `${Math.pow((num1 * num2), num3)}`
}

console.log(numbers(2,2,2))