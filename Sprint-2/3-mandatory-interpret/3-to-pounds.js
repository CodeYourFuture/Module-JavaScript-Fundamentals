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

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. penceStringWithoutTrailingP : it's value is the return of the method substring()which is 399.
// the substring(0,3-1),when the substring extracts string  from index 0 to 2 =>399 and p will be dropped.

// 3. paddedPenceNumberString  : its value is what the padstart() method returns which is the same.399
//padstart(3,0),it is supossed to add  0's till the needed length is reached which is 3=>399.

// 4. const Pound is initialized by the out come of the substring()method which is only 3. Because the
// substring start index is zero and end endex is 1.
// 5. const pence will be initialized there are two methods. the first one will extract the string form index 1
// the second one will add  0 which there is no need=> 99
//6.consol.log => 3.99
