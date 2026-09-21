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
console.log(pounds);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. penceStringWithoutTrailingP = penceString.substring(  0,  penceString.length - 1): This line of code slice the penceString varible by removing the "p" character from it.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") : This line of code adds "0" if lenght of penceStringWithoutTrailingP is less then 3 i.e e value is "1" => it will convert it to"001" or ifthe value is "22" it will convert it to "022".
// 4. const pounds = paddedPenceNumberString.substring( 0,  paddedPenceNumberString.length - 2); : This line of code extract and store the value  of pound from paddedPenceNumberString using the substring method since £1 = 100 pences => any number in the hudered position i.e third character from the right onwards has a value of £.
// 5. const pence = paddedPenceNumberString   .substring(paddedPenceNumberString.length - 2)  .padEnd(2, "0");: This line of code extract and store the value  of pences paddedPenceNumberString using the substring method => instead of starting from the left it start from the right moving two positions then it adds  "0"in case the pences value is less then 10.
// 6. console.log(`£${pounds}.${pence}`): This line of code prints the final result in £ and pences in nice readable way => £3.99
