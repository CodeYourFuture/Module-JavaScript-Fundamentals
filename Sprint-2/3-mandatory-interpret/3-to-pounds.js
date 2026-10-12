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

//for this code I struggled with some part so I had to ask copilot to explain some lines of the code to me
//const penceStringWithoutTrailingP = penceString.substring(
// 0,
// penceString.length - 1
//);
//const penceStringWithoutTrailingP: a string variable is initialised and assigned
// using the = operator to be equal to the value of string penceString when the method substring is used to cut part of the string
//so substring(0, penceString.length - 1);: means use substring method starting from index zero and end before the last character pencestring.length-1 : which is the length of the string
//but how dom we know which index? Its is basically the characters in string where "399p" means we have 4 characters and we want to take 1
//do 4 - 1 = 3 , so we are removing p character from the string so it becomes 399
//this line says take the string penceStringWithoutTrailingP and use padStart()string method
// (3, "0"); this means make the string 3 characters at least and if not add o to the beginning
//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//this line means take the string paddedPenceNumberString and use the
//substring(0, length - 2) method to remove the last 2 characters , than store
//the value into the pounds variable
//const pounds = paddedPenceNumberString.substring(
// 0,
// paddedPenceNumberString.length - 2
//);

//this (paddedPenceNumberString.length - 2) mean find the position of the last 2 characters
//in the string paddedPenceNumberString
//substring()means take the last 2 characters you found from the string
//.padEnd(2, "0"); means if the result is less than two characters , than add zero at
//the end until it reaches two digits
//const pence = paddedPenceNumberString
//.substring(paddedPenceNumberString.length - 2)
// .padEnd(2, "0");
//this line uses console.log to print the value of ponds and pence
//it uses literal template to find the value of pounds, uses a decimal point , than finds the value of pence
//it also uses a pound sign at the front
// console.log(`£${pounds}.${pence}`);
