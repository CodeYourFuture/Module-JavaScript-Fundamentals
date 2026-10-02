// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.


function formatAs12HourClock(time) {
  const timeString = String(time);
  let [hours, minutes] = timeString.split(":").map(Number);
  if (isNaN(minutes)){
    minutes = 0;
  }
  let period = "am"
  if (hours >= 12) {
    period = "pm";
    if (hours > 12) {
      hours = hours - 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  return `${paddedHours}:${paddedMinutes}${period}`;
}

console.log(formatAs12HourClock("00:30"))
console.log(formatAs12HourClock("23:32"))
console.log(formatAs12HourClock("08:50"))
console.log(formatAs12HourClock("13:00"))
