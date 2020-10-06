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
    for (let i = 0; i < arr.length; i++)
    {
      console.log(arr[i] + " is in Progressive Web Dev");
      }
  }
  printStudents(students);

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


function calculateDogAge(humanAge, puppyAge){
  let dogAge = humanAge * 7;
  console.log(`Human age is ${humanAge}. You Puppy age is ${puppyAge} and Dog is ${dogAge} years old in dog years.`);
  return dogAge;
}

calculateDogAge(400, 12);








//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age) \\ assuming benchmark to be 40
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age, amtPd) {
  let benchmarkAge = 40;
  let remainingAge = benchmarkAge - age;
  let amountconsumed = (amtPd * 360) * remainingAge;
  return `you will need ${amountconsumed} ramen packs to last you until age of ${benchmarkAge} based on per day value of ${amtPd}`;
}
calculateSupply(22, 10);



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
  let circumference = parseFloat(2 * 3.141592 * radius);
  return `The Circumference is ${circumference} inches`;
}
calcCircumference(10);

function calcArea(radius){
  // the value for pie is 3.14 using the formula pie*r2.
  let area = parseFloat(3.14 * radius * radius);
  return `The area is ${area} inches` ;
}

calcArea(10)








//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"


function celsiusToFahrenheit(){
  let CelsiusTemp = 22 //prompt("Enter the value is Celsius");
  formula = parseFloat(((CelsiusTemp/5)*9)+32);
  return `${CelsiusTemp} Celsius is ${formula} Fahrenheit`
}
 
celsiusToFahrenheit();

function fahrenheitToCelsius(){
  let farhenheitTemp = 77 //prompt("Enter the value is Celsius");
  formula = parseFloat(((farhenheitTemp - 32) * 5)/9);
  return `${farhenheitTemp} Fahrenheit is ${formula} Celsius`
}
 
fahrenheitToCelsius();


//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function ParametersExp(a,b,power){
  output = a*b
  value = Math.pow(output, power)
  return value
}

ParametersExp(2,3,4)
