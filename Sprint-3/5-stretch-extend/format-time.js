// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
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


// Midnight
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// Noon
const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// PM time with non-zero minutes
const currentOutput5 = formatAs12HourClock("13:45");
const targetOutput5 = "01:45 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// Just before midnight
const currentOutput6 = formatAs12HourClock("23:59");
const targetOutput6 = "11:59 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);


//FIXED VERSIONS

function formatAs12HourClock(time) {
  const [hoursString, minutes] = time.split(":");
  let hours = Number(hoursString);
  let period = "am";

  if (hours === 0) {
    hours = 12;
  } else if (hours === 12) {
    period = "pm";
  } else if (hours > 12) {
    hours = hours - 12;
    period = "pm";
  }

  const paddedHours = hours.toString().padStart(2, "0");
  return `${paddedHours}:${minutes} ${period}`;
} 
