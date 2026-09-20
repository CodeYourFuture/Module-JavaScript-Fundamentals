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
  return Number.parseFloat(weight / (height * height)).toFixed(1);
}

// Tests
console.log(calculateBMI(55, 1.63));
console.log(calculateBMI(120, 1.73));
console.log(calculateBMI(80, 1.69));
console.log(calculateBMI(51, 1.55));

// Please could I have a little feedback about if I have refactored the function return too much?
// And if so, what is a good guide on how many operations to perform in one line..? I can also
// ask this in class if you prefer.
