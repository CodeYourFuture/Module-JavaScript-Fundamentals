// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // Extract hours as a Number and minutes as a String
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  let formattedHours;
  let period;

  // Decision Tree for 12-Hour Conversion
  if (hours === 0) {
    formattedHours = "12";
    period = "am";
  } else if (hours === 12) {
    formattedHours = "12";
    period = "pm";
  } else if (hours > 12) {
    const twelveHour = hours - 12;
    formattedHours = twelveHour < 10 ? `0${twelveHour}` : `${twelveHour}`;
    period = "pm";
  } else {
    formattedHours = time.slice(0, 2);
    period = "am";
  }

  // Formatting: Reassemble hours, minutes, and period
  return `${formattedHours}:${minutes} ${period}`;
}

// Test Cases

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current ${currentOutput}, target ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current ${currentOutput2}, target ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current ${currentOutput3}, target ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("01:00");
const targetOutput4 = "01:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current ${currentOutput4}, target ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("12:00");
const targetOutput5 = "12:00 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current ${currentOutput5}, target ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("13:00");
const targetOutput6 = "01:00 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current ${currentOutput6}, target ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("15:30");
const targetOutput7 = "03:30 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current ${currentOutput7}, target ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("23:59");
const targetOutput8 = "11:59 pm";
console.assert(
  currentOutput8 === targetOutput8,
  `current ${currentOutput8}, target ${targetOutput8}`
);

console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("01:00"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("13:00"));
console.log(formatAs12HourClock("15:30"));
console.log(formatAs12HourClock("23:59"));
console.log("All assertions completed!");
