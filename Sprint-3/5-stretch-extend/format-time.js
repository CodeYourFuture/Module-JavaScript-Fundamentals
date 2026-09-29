// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

const assert = require("node:assert/strict");

function formatAs12HourClock(time) {
  if (typeof time !== "string" || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time)) {
    throw new RangeError("time must be a valid 24-hour time in HH:MM format");
  }

  const hours = Number(time.slice(0, 2));
  const displayHours = String(hours % 12 || 12).padStart(2, "0");
  const minutes = time.slice(3);
  const period = hours < 12 ? "am" : "pm";

  return `${displayHours}:${minutes} ${period}`;
}

assert.equal(formatAs12HourClock("00:00"), "12:00 am");
assert.equal(formatAs12HourClock("00:05"), "12:05 am");
assert.equal(formatAs12HourClock("08:00"), "08:00 am");
assert.equal(formatAs12HourClock("11:59"), "11:59 am");
assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
assert.equal(formatAs12HourClock("12:45"), "12:45 pm");
assert.equal(formatAs12HourClock("13:07"), "01:07 pm");
assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
assert.throws(() => formatAs12HourClock("24:00"), RangeError);
assert.throws(() => formatAs12HourClock("12:60"), RangeError);
assert.throws(() => formatAs12HourClock("8:00"), RangeError);

console.log("All formatAs12HourClock tests passed.");
