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

// 2. From line 3 to line 6 const penceStringWithoutTrailingP is declared and it will hold the value of
// penceString.substring(0, penceString.length - 1)
// which is "399". We got this value by the method substring(0, penceString.length - 1) called by penceString
// Breaking down the expression penceString.substring(0, penceString.length - 1)
// a) penceString.length - 1 this counts the number of characters in the penceString String and then subtracts 1 from it (4-1=3)
// then it will look like this penceString.substring(0, 3)
// b) penceString.substring(0, penceString.length - 1) then the substring method called by penceString
// is used produce a slice of small string from a big string
// it takes two arguments the first one tells where to start slicing and the second one tells where to stop
// (but the last character is not included)
// Therefore const penceStringWithoutTrailingP will be assigned "399"

// 3. In line 8 const paddedPenceNumberString is declared and it will hold the value of penceStringWithoutTrailingP.padStart(3, "0")
// which is still "399". In this expression we used the method padStart called by penceStringWithoutTrailingP and this method is basically
// adds characters at the start of our String. It takes two arguments the first one is telling how many characters we want in our String
// and second argument tells the character that needs to be added so that we get out desired number of characters in our String.
// since our String length is 3 the method will not do anything

// 4. From line 9 to line 12 const pounds is declared and it will hold the value of paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2,)
// which is "3". We got this value by the method substring(0, paddedPenceNumberString.length - 2,) called by paddedPenceNumberString
// Breaking down the expression paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2,)
// a) paddedPenceNumberString.length - 2 this counts the number of characters in the paddedPenceNumberString then subtracts 2 from it (3-2=1)
// then it will look like this paddedPenceNumberString.substring(0, 1)
// b) paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2,) then the substring method called by paddedPenceNumberString is used to
// produce a slice of small string from a big string
// it takes two arguments the first one tells where to start slicing and the second one tells where to stop
// (but the last character is not included)
// Therefore const pounds will assigned "3"

// 5. From line 14 to line 16 const pence is declared and it will hold the value of
// paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") which is "99"
// Breaking down the expression
// a) paddedPenceNumberString.length - 2 this will count the number of characters in paddedPenceNumberString and then subtracts 2 from it (3-2=1)
// paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) then this substring method will produce small string from it starting from index 1 which will be "99"
//then finally paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") the padEnd method will add characters at the end of the String
// and  will take two arguments first will tell how many characters we need in our string and the second will tell the character that needs to be added
// since our String length is 2 the method will do nothing

// 6. Finally line 18 will print out the desired format we have added what to be printed inside the back-ticks if they are variables we will put them in ${}
