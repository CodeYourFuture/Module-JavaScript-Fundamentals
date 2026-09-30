// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} AM`;
  }
  if (hours === 12) {
    return `12:${minutes} PM`;
  }
  if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  }
  return `${time} AM`;
}

const currentOutput1 = formatAs12HourClock("00:00");
const targetOutput1 = "12:00 AM";
console.assert(
  currentOutput1 === targetOutput1,
  `current output 1: ${currentOutput1}, target output: ${targetOutput1}`,
);

const currentOutput2 = formatAs12HourClock("00:01");
const targetOutput2 = "12:01 AM";
console.assert(
  currentOutput2 === targetOutput2,
  `current output 2: ${currentOutput2}, target output: ${targetOutput2}`,
);

const currentOutput3 = formatAs12HourClock("08:00");
const targetOutput3 = "08:00 AM";
console.assert(
  currentOutput3 === targetOutput3,
  `current output 3: ${currentOutput3}, target output: ${targetOutput3}`,
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 PM";
console.assert(
  currentOutput4 === targetOutput4,
  `current output 4: ${currentOutput4}, target output: ${targetOutput4}`,
);

const currentOutput5 = formatAs12HourClock("12:01");
const targetOutput5 = "12:01 PM";
console.assert(
  currentOutput5 === targetOutput5,
  `current output 5: ${currentOutput5}, target output: ${targetOutput5}`,
);

const currentOutput6 = formatAs12HourClock("13:00");
const targetOutput6 = "1:00 PM";
console.assert(
  currentOutput6 === targetOutput6,
  `current output 6: ${currentOutput6}, target output: ${targetOutput6}`,
);

const currentOutput7 = formatAs12HourClock("23:00");
const targetOutput7 = "11:00 PM";
console.assert(
  currentOutput7 === targetOutput7,
  `current output 7: ${currentOutput7}, target output: ${targetOutput7}`,
);

const currentOutput8 = formatAs12HourClock("23:59");
const targetOutput8 = "11:59 PM";
console.assert(
  currentOutput8 === targetOutput8,
  `current output 8: ${currentOutput8}, target output: ${targetOutput8}`,
);

// Edge test cases tested for:

// 1) 00:00 -> 12:00 AM
// 2) 00:01 -> 12:01 AM
// 3) 08:00 -> 08:00 am
// 4) 12:00 -> 12:00 PM
// 5) 12:01 -> 12:01 PM
// 6) 13:00 -> 1:00 PM
// 7) 23:00 -> 11:00 PM
// 8) 23:59 -> 11:59 PM
