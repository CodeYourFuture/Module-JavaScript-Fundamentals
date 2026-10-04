// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const slicedHours = time.slice(0, 2);
  const hours = Number(slicedHours);
  const slicedMinutes = time.slice(-2);
  const minutes = Number(slicedMinutes);
  const pattern = /^\d{2}:\d{2}$/;
  if (!pattern.test(time)) {
    return `wrong format input`;
  }
  if (minutes < 60) {
    if (hours >= 24) {
      return `please check your input hour`;
    } else if (hours > 12 && hours <= 21) {
      return `0${hours - 12}:${slicedMinutes} pm`;
    } else if (hours > 21) {
      return `${hours - 12}:${slicedMinutes} pm`;
    } else if (hours === 0) {
      return `12:${slicedMinutes} am`;
    } else if (hours === 12) {
      return `12:${slicedMinutes} pm`;
    } else {
      return `${slicedHours}:${slicedMinutes} am`;
    }
  } else {
    return `please check your input minute`;
  }
}

const currentOutput1 = formatAs12HourClock("00:00");
const targetOutput1 = "12:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`,
  "dude whats wrong",
);

const currentOutput2 = formatAs12HourClock("13:00");
const targetOutput2 = "01:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
  "dude whats wrong",
);

const currentOutput3 = formatAs12HourClock("21:00");
const targetOutput3 = "09:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`,
  "dude whats wrong",
);

const currentOutput4 = formatAs12HourClock("22:00");
const targetOutput4 = "10:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`,
  "dude whats wrong",
);

const currentOutput5 = formatAs12HourClock("23:59");
const targetOutput5 = "11:59 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`,
  "dude whats wrong",
);

const currentOutput6 = formatAs12HourClock("12:60");
const targetOutput6 = "please check your input minute";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`,
  "dude whats wrong",
);

const currentOutput7 = formatAs12HourClock("24:00");
const targetOutput7 = "please check your input hour";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`,
  "dude whats wrong",
);

const currentOutput8 = formatAs12HourClock("100:00");
const targetOutput8 = "wrong format input";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`,
  "dude whats wrong",
);

const currentOutput9 = formatAs12HourClock("0:00");
const targetOutput9 = "wrong format input";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`,
  "dude whats wrong",
);

const currentOutput10 = formatAs12HourClock("tt:00");
const targetOutput10 = "wrong format input";
console.assert(
  currentOutput10 === targetOutput10,
  `current output: ${currentOutput10}, target output: ${targetOutput10}`,
  "dude whats wrong",
);

console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("13:00"));
console.log(formatAs12HourClock("21:00"));
console.log(formatAs12HourClock("22:00"));
console.log(formatAs12HourClock("23:59"));
console.log(formatAs12HourClock("12:60"));
console.log(formatAs12HourClock("24:00"));
console.log(formatAs12HourClock("100:00"));
console.log(formatAs12HourClock("0:00"));
console.log(formatAs12HourClock("tt:00"));

// /^\d{2}:\d{2}$/ so this is regular expression or regex I used them to validate the input time format
// it is enclosed with /.../ telling the JS it is regular expression
// ^ this means check from the start of the string
// \d this refers single digit from 0 to 9
// {2} means two times (\d{2} .....two single digits)
// : simply checks with :
// the same like before \d{2} checks two single digits
// $ checking ends

// I preferred this because it will strictly check the format of the input with the desired input format
// so that the following process will continue with out error, and it saves a lot of time

// It is rigid and does not check the value ....it only checks the format
