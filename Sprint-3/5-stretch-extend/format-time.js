// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

//these are my commints
//we created a function with a parameter time to format 12 hour clock
function formatAs12HourClock(time) {
  //we created a variable hours and assigned its value to be the object Number
  //Number object can be any number
  //to find number value we use the slice method to take the value from start to index 2
  const hours = Number(time.slice(0, 2));
  //here we created if statement, if the variable hours value bigger then 12
  //then return the value of hours -12 ans add two 00z after with pm
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

export {formatAs12HourClock}; 

// I will solve it later