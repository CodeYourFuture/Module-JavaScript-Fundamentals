// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hoursStr = time.slice(0, 2);
  const hours = Number(hoursStr);
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours > 12) {
    return `${String(hours - 12).padStart(2, '0')}:${minutes} pm`;
  }

  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  return `${hoursStr}:${minutes} am`;
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

const currentOutput3 = formatAs12HourClock("12:30");
const targetOutput3 = "12:30 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("00:15");
const targetOutput4 = "12:15 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

console.log(formatAs12HourClock("13:15"));
console.log(formatAs12HourClock("05:53"));
console.log(formatAs12HourClock("19:36"));