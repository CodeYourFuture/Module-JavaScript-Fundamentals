const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
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


// Answers


// 2. const penceStringWithoutTrailingP = penceString.substring(
  //    0,
  //    penceString.length - 1
//    );
// This declares and initialises a new variable penceStringWithoutTrailingP that is a substring of
// penceString, starting at position 0 and up to but not including the last position. So the new variable
// gets the value "399", the p is left behind.


// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// We now want our value to be at least 3 digits long, but in case it is shorter, we want to fill up with zeros at
// the start so it becomes 3 digits long. padStart does that, the 3 specifies minimum amount of digits and the "0"
// specifies what to fill with. The result gets saved in new variable paddedPenceNumberString.


// 4. const pounds = paddedPenceNumberString.substring(
//      0,
//      paddedPenceNumberString.length - 2
//    );
// Now we save the pounds amount into new variable pounds. We get the amount (which could be any amount of digits long)
// by creating a substring from paddedPenceNumberString starting at position 0 and ending before the next to
// last digit. The last two digits are the pence amount and they aren't included in pounds.


// 5. const pence = paddedPenceNumberString
//      .substring(paddedPenceNumberString.length - 2)
//      .padEnd(2, "0");
// Similarly to the previous operation, here we save the pence amount into new variable pence. We get it by
// using substring on paddedPenceNumberString again, this time starting two digits from the end, saving the
// final two digits into pence. Then, if the digits are fewer than 2, we chain a padEnd to add "0" until pence
// is 2 digits long.
// After trying different values, it seems like it is unnecessary to have the padEnd, since the pence will
// always already be 2 digits long. Even if penceString started with just 1 digit, "0"s will have been padded
// earlier at the beginning of the string, so pence can always be 2 digits and the padEnd will never take effect.


// 6. console.log(`£${pounds}.${pence}`);
// Using a template literal, here we log the £ sign followed by the the pounds amount, a period and the pence
// amount, which is formatted to understand easier than the original penceString was.