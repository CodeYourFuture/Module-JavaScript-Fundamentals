// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // Split "08:00" into hours "08" and minutes "00"
  const [hourString, minutes] = time.split(":");
  let hours = Number(hourString);

  // Determine if it is AM or PM
  const period = hours >= 12 ? "pm" : "am";

  // Convert 24-hour format to 12-hour format
  if (hours === 0) {
    hours = 12; // Midnight (00:xx) becomes 12:xx am
  } else if (hours > 12) {
    hours = hours - 12; // Afternoon/evening (13:xx - 23:xx) becomes 1:xx - 11:xx pm
  }

  // Pad the hours with a leading zero if needed (e.g., "8" becomes "08")
  const paddedHours = hours.toString().padStart(2, "0");

  return `${paddedHours}:${minutes} ${period}`;
}
// Test 1: Morning time
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
// Test 2: Evening time
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
// Test 3: Edge case for 12:00 (Noon)
// The current function logic thinks 12 > 12 is false, so it returns "12:00 am". 
// This is technically a bug in the provided function, but a good test case!
const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm"; // Correct expectation
console.assert(
  currentOutput3 === targetOutput3,
  `Noon Test Failed -> current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// Test 4: Check for formatting bug (dropping minutes)
// The current function returns `${hours - 12}:00 pm` which ignores the minutes.
const currentOutput4 = formatAs12HourClock("13:45");
const targetOutput4 = "01:45 pm"; 
console.assert(
  currentOutput4 === targetOutput4,
  `Minute Formatting Failed -> current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// Test 5: Test single digit hour formatting
// Usually, 12-hour clocks are written as "01:00 pm", not "1:00 pm"
const currentOutput5 = formatAs12HourClock("13:00");
const targetOutput5 = "01:00 pm"; 
console.assert(
  currentOutput5 === targetOutput5,
  `Hour Padding Failed -> current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// Test 6: Midnight check
const currentOutput6 = formatAs12HourClock("00:00");
const targetOutput6 = "12:00 am";
console.assert(
  currentOutput6 === targetOutput6,
  `Midnight Test Failed -> current output: ${currentOutput6}, target output: ${targetOutput6}`
);
// Test 7: Noon edge case (12:30)
const currentOutput7 = formatAs12HourClock("12:30");
const targetOutput7 = "12:30 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `Noon Test Failed -> current: ${currentOutput7}, target: ${targetOutput7}`
);

// Test 8: Midnight edge case (00:30)
const currentOutput8 = formatAs12HourClock("00:30");
const targetOutput8 = "12:30 am";
console.assert(
  currentOutput8 === targetOutput8,
  `Midnight Test Failed -> current: ${currentOutput8}, target: ${targetOutput8}`
);

// Test 9: Last minute of the day (23:59)
const currentOutput9 = formatAs12HourClock("23:59");
const targetOutput9 = "11:59 pm";
console.assert(
  currentOutput9 === targetOutput9,
  `Late Night Test Failed -> current: ${currentOutput9}, target: ${targetOutput9}`
);