// This is the latest solution to the problem from the prep.
// https://programming.codeyourfuture.io/structuring-data/sprints/2/prep/
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  // handle midnight and noon
  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    return `${hours}:${minutes} pm`;
  }

  // otherwise convert to 12-hour clock
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  return `${time} am`;

  return false;
}

// Here's a short function to make my tests easier to read
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Test Group: Valid Inputs, Boundary Conditions
const validAfternoon = formatAs12HourClock("13:22");
assertEquals(validAfternoon, "1:22 pm");

const validMorning = formatAs12HourClock("10:39");
assertEquals(validMorning, "10:39 am");

const midnight = formatAs12HourClock("00:00");
assertEquals(midnight, "12:00 am");

const noon = formatAs12HourClock("12:00");
assertEquals(noon, "12:00 pm");

const midnightMinutes = formatAs12HourClock("00:17");
assertEquals(midnightMinutes, "12:17 am");
