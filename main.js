//Exercise #1
//Write a function that loops over the following array of TKH students
// and prints out their name and what class they are currently in.
let students = [
  'Angel',
  'Ayman',
  'David',
  'Diana',
  'Ezra',
  'Jahaziel',
  'Jennifer',
  'Julian',
  'Katherine',
  'Leesel',
  'Naeem',
  'Nashid',
  'Quiana',
  'Shafee',
  'Shan',
  'Stephanie',
  'Tinesha',
  'Zipporah',
]
function pirntArry(arr){
  for(let i= 0 ;i < arr.length ; i++){

    console.log(arr[i] +" is in web Dev")
  }

}
pirntArry(students);


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
function calculateDogAge(age) {
  let dogAge = 7*age;
  console.log("Your doggie is " + dogAge + " years old in dog years!");
}










//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(age ,amount) {
  let x = 100;
  let total = (amount * 365) * (x - age);
  let  message = ' u need  ' + total + ' of water ' + x;
  console.log(message);
}

console.log(calculateSupply(24, 7));







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
  let circum = Math.PI * 2*r;
  console.log("The circumference is " + circum);
  
}
calcCircumference(100);


function calcArea(r){
  let area = Math.PI * r*r;
  console.log("The area is " + area);
}
calcArea(100);















//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

function celsiusToFahrenheit(c) {
  let F = (c*9)/5 + 32;
  console.log(c + '°C is ' + F+ '°F');

}
celsiusToFahrenheit(34);

function fahrenheitToCelsius(F) {
  let c = ((F - 32)*5)/9;
  console.log(F + '°F is ' + c+ '°C');
}
fahrenheitToCelsius(60);



//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3
function power(num1, num2, num3) {
  return Math.pow((num1 * num2),(num3));
}
console.log(power(1, 2, 3));