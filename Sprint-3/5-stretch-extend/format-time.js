// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3, 5));
  if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} pm`;
  } else if (hours === 12) {
    return `${hours}:${minutes.toString().padStart(2, "0")} pm`;
  } else if (hours === 0) {
    return `12:${minutes.toString().padStart(2, "0")} am`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`,
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
);

formatAs12HourClock("19:00");
let output = formatAs12HourClock("19:00");
let target = "07:00 pm";
console.assert(
  output === target,
  `current output: ${output}, target output: ${target}`,
);
console.log(formatAs12HourClock("19:00"));
// //works
formatAs12HourClock("9:00");
output = formatAs12HourClock("9:00");
target = "9:00 am";
console.assert(
  output === target,
  `current output: ${output}, target output: ${target}`,
);
console.log(formatAs12HourClock("9:00"));
// //works
formatAs12HourClock("12:00");
output = formatAs12HourClock("12:00");
target = "12:00 pm";
console.assert(
  output === target,
  `current output: ${output}, target output: ${target}`,
);

console.log(formatAs12HourClock("12:00"));
//Function needs else if statement to includes code behavior when "12:00" will be the argument value.

console.log(formatAs12HourClock("9:00"));
// //works
formatAs12HourClock("00:00");
output = formatAs12HourClock("00:00");
target = "12:00 am";
console.assert(
  output === target,
  `current output: ${output}, target output: ${target}`,
);
console.log(formatAs12HourClock("00:00"));
//Function needs else if statement to includes code behavior when "00:00" will be the argument value.

formatAs12HourClock("19:37");
output = formatAs12HourClock("19:37");
target = "07:37 pm";
console.assert(
  output === target,
  `current output: ${output}, target output: ${target}`,
);
console.log(formatAs12HourClock("19:37"));
//For the test to pass I had to create a minutes variable to extract the minutes from the input. When minutes were converted to a number, zero at the start of the string was removed, so padStart(2, "0") was used to add it back.
