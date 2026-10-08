// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

function calculateBMI(weight, height) {
  // return the BMI of someone based off their weight and height
  const bmi = weight / (height ** 2);
  return bmi.toFixed(1);
}
console.log(calculateBMI(70, 1.73));
