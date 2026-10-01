// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

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
    return `${String(hours - 12).padStart(2, "0")}${minutes} pm`;
  }

  return `${String(hours).padStart(2, "0")}${minutes} am`;
}

console.assert(formatAs12HourClock("08:00") === "08:00 am");
console.assert(formatAs12HourClock("23:00") === "11:00 pm");
console.assert(formatAs12HourClock("00:00") === "12:00 am");
console.assert(formatAs12HourClock("12:00") === "12:00 pm");
console.assert(formatAs12HourClock("13:30") === "01:30 pm");
