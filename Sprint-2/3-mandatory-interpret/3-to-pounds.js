const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1,
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2,
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); initialises a variable that takes the value of variable penceString and uses the method substring() to remove the "p" from "399p" so the variable penceStringWithoutTrailingP now stores the string "399"

//3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); initialises a variable called paddedPenceNumberString that takes the value of variable penceStringWithoutTrailingP and uses the method .padStart() to make sure that the string is always 3 characters long, if it's shorter javascript will pad the value out with a 0 at the start of the value. e.g 39 = 039 or 9 = 009. so paddedPenceNumberString stores "399"

//4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2,); initialises a variable that called pounds that takes the value inside paddedPenceNumberString and uses the method subString() on it to remove the last two numbers from the padded string value. So the variable pounds now stores the string "3" which represents £3

//5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//initialises a variable called pence that takes the value of the variable paddedPenceNumberString and runs the .substring() method on it and isolates the last two numbers returning 99. the method .padEnd() then looks at this value and if it's two characters long it wont do anything, if it's less it'll add a 0 to the end of the value. In this case it produced 99 so it doesn't do anything. So the variable pence now stores "99" which represents £.99

//6. console.log(`£${pounds}.${pence}`); This will combine and print the final price using a template literal so the console will print (£3.99)
