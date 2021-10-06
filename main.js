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

function classmates(arr){
  students.map((arr) => console.log(`${arr} is currrently in PWD`))
}
classmates();


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


function calculateDogAge(age){
  let dogYears = age*7;
  console.log(`Your dog is ${dogYears} years old in dog years!`)
}

calculateDogAge(5);
calculateDogAge(1);
calculateDogAge(13);







//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age,amount){
  let benchmark = 75;
  let total = (amount * 365) * (benchmark - age);
  console.log(`You will need ${total} ?meals to last you until the age of ${benchmark}`)
}

calculateSupply(27,3)









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


function calcCircumfrence(radius){
let math = Math.PI * 2 * radius;
console.log(`The circumfrence is ${math}`)
}

function calcArea(radius){
let area = Math.PI * (radius * radius);
console.log(`The area is ${area}`)

}

calcCircumfrence(5);
calcArea(3);









//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"


function celsiusToFahrenheit(cel){
  let fahrenheit = (cel * (9/5) * 32);
  return `${cel} degrees celsius is ${fahrenheit} degrees fahrenheit`

}
function fahrenheitToCelsius(fahr){
  let celsius = (fahr - 32) * (5/9);
  return `${fahr} degrees fahrenheit is ${celsius} degrees celsius`
}

console.log(celsiusToFahrenheit(2));
console.log(fahrenheitToCelsius(59));




//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function products( a, b , c){
  let product = Math.pow((a*b), c)
  return product;
}

console.log(products(1,2,3));
