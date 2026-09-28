// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example '23.4'.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return a string of their Body Mass Index to 1 decimal place

function calculateBMI(weight, height) {
  let bmiNum = weight / (height * height);
  bmiNum = bmiNum.toFixed(1);
  return bmiNum;
}

console.log(calculateBMI(70, 1.73));

// What type of value do you expect your function to return? A number or a string?
//I expect function to return string as required, toFixed() change the type of number to a string.

// Does your function return the type of value you expect?
//Yes I did expect a string returned.

// Different types of values may appear identical in the console output, but they are represented and treated differently in the program. For example,

//   console.log(123);              // Output 123(number)
//   console.log("123");            // Output 123(string)

//   // Treated differently in the program
//   let sum1 = 123 + 100;         // Evaluate to 223 -- a number
//   let sum 2 = "123" + 100;      // Evaluate to "123100" -- a string.
