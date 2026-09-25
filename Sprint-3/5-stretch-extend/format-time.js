// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours === 0) {
    return `12${time.slice(2)} am`;
  }
  if (hours === 12) {
    return `12${time.slice(2)} pm`;
  }
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${time.slice(3)} pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:30");
const targetOutput = "08:30 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`,
);

const currentOutput2 = formatAs12HourClock("15:30");
const targetOutput2 = "03:30 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
);

const currentOutput5 = formatAs12HourClock("11:59");
const targetOutput5 = "11:59 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`,
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";

console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`,
);
const currentOutput4 = formatAs12HourClock("12:02");
const targetOutput4 = "12:02 pm";

console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`,
);

console.log(currentOutput, targetOutput);
console.log(currentOutput2, targetOutput2);
console.log(currentOutput3, targetOutput3);
console.log(currentOutput4, targetOutput4);
console.log(currentOutput5, targetOutput5);
