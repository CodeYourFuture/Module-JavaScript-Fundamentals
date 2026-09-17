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
// This program takes a string representing a price in pence.
// The program then builds up a string representing the price in pounds.

// Step-by-step breakdown:

// 1. const penceString = "399p";
// Initialises the penceString variable with the string "399p".
// This represents a price of 399 pence.

// 2. penceString.length - 1
// penceString has a length of 4. Subtracting 1 gives 3.
// This is used to identify the position before the final "p".

// 3. penceString.substring(0, penceString.length - 1)
// substring() extracts the characters from index 0 up to, but not including,
// index 3. This removes the trailing "p" and produces the string "399".

// 4. const penceStringWithoutTrailingP = ...
// Stores the result "399", so the price now contains only the numeric characters.

// 5. penceStringWithoutTrailingP.padStart(3, "0")
// padStart() makes sure the string contains at least 3 characters.
// If it has fewer than 3 characters, "0" is added to the beginning.
// For "399", no padding is needed, so the value remains "399".
// This is useful for smaller values such as "99", which would become "099".

// 6. const paddedPenceNumberString = ...
// Stores the padded string. For the current input, its value is "399".

// 7. paddedPenceNumberString.length - 2
// This calculates the position that separates the pounds from the final
// two digits representing pence. For "399", the length is 3, so 3 - 2 = 1.

// 8. paddedPenceNumberString.substring(
//      0,
//      paddedPenceNumberString.length - 2
//    )
// Extracts the characters before the final two digits.
// For "399", this extracts "3", which represents the pounds.

// 9. const pounds = ...
// Stores the pounds part of the price. In this example, pounds is "3".

// 10. paddedPenceNumberString
//       .substring(paddedPenceNumberString.length - 2)
// substring() starts two characters from the end of the string.
// For "399", it extracts "99", which represents the pence part.

// 11. .padEnd(2, "0")
// Makes sure the pence part contains at least two characters.
// If necessary, "0" is added to the end until the string has a length of 2.
// In this example, "99" already has two characters, so it remains "99".

// 12. const pence = ...
// Stores the final pence part. In this example, pence is "99".

// 13. console.log(`£${pounds}.${pence}`);
// Uses a template literal to combine the pound sign, pounds value,
// decimal point and pence value.
// With the input "399p", the final output is "£3.99".