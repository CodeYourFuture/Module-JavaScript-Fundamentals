// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hoursString, minutesString = "00"] = time.split(":");
  const hours = Number(hoursString);
  const minutes = minutesString.padStart(2, "0");

  let suffix = "am";
  if (hours >= 12) {
    suffix = "pm";
  }

  const formattedHours = String(hours % 12 || 12).padStart(2, "0");

  return `${formattedHours}:${minutes} ${suffix}`;
}

function check(input, expected) {
  const actual = formatAs12HourClock(input);

  if (actual !== expected) {
    console.error(`FAIL: ${input} -> ${actual} (expected ${expected})`);
    process.exitCode = 1;
  }
}

check("23:00", "11:00 pm");
check("12:00", "12:00 pm");
check("00:00", "12:00 am");
check("08:00", "08:00 am");
check("9:5", "09:05 am");

if (!process.exitCode) {
  console.log("All formatAs12HourClock tests passed.");
}
