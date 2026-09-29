

// Test result:
// Hours and Minutes worked in the AM function for different time test.
// 12:00 in the afternoon doesn't function correctly
// 00:00 mid-night doesn't work
// Minutes in the PM are not working.

// To fix bug:

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
  }

  return `${time} am`;
}

const currentOutput = formatAs12HourClock("01:00");
const targetOutput = "01:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`,
);
console.log(formatAs12HourClock("01:00"));

const currentOutput2 = formatAs12HourClock("19:30");
const targetOutput2 = "07:30 pm";

console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
);

console.log(formatAs12HourClock("19:30"));
