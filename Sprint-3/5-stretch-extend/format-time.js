// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data
// or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(2);

  if (hours === 0) {
    return `12${minutes} am`;
  }

  if (hours === 12) {
    return `12${minutes} pm`;
  }

  if (hours > 12) {
    return `${hours - 12}${minutes} pm`;
  }

  return `${time} am`;
}

// Morning
console.assert(formatAs12HourClock("08:00") === "08:00 am");

// Midnight
console.assert(formatAs12HourClock("00:00") === "12:00 am");

// Just after midnight
console.assert(formatAs12HourClock("00:30") === "12:30 am");

// Before noon
console.assert(formatAs12HourClock("11:59") === "11:59 am");

// Noon
console.assert(formatAs12HourClock("12:00") === "12:00 pm");

// Afternoon
console.assert(formatAs12HourClock("13:00") === "1:00 pm");

// Evening with minutes
console.assert(formatAs12HourClock("20:30") === "8:30 pm");

// Late evening
console.assert(formatAs12HourClock("23:00") === "11:00 pm");

// End of the day
console.assert(formatAs12HourClock("23:59") === "11:59 pm");