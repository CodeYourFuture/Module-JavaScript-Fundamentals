// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  // handle midnight and noon
  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  // otherwise convert to 12-hour clock
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  return `${time} am`;
}

// Here's a short function to make my tests easier to read
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `current output: ${actualOutput}, target output: ${targetOutput}`,
  );
}

// Test Group: the original tests
assertEquals(formatAs12HourClock("08:00"), "08:00 am");
assertEquals(formatAs12HourClock("23:00"), "11:00 pm");

// Test Group: minutes are kept (bug: the original always returned ":00")
assertEquals(formatAs12HourClock("13:22"), "1:22 pm");
assertEquals(formatAs12HourClock("10:39"), "10:39 am");

// Test Group: boundary conditions
assertEquals(formatAs12HourClock("00:00"), "12:00 am");
assertEquals(formatAs12HourClock("00:17"), "12:17 am");
assertEquals(formatAs12HourClock("12:00"), "12:00 pm");
assertEquals(formatAs12HourClock("11:59"), "11:59 am");
assertEquals(formatAs12HourClock("23:59"), "11:59 pm");
