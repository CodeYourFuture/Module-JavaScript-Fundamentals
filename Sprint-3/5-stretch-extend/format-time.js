// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }                                               
// // console.log(formatAs12HourClock("10:15"));

// // Early Morning: ================> assertion passed
// let currentOutput = formatAs12HourClock("08:30");
// let targetOutput = "08:30 am";
// console.assert(
//   currentOutput === targetOutput,
//  `current output: ${currentOutput}, target output: ${targetOutput}`
// );
// console.log(formatAs12HourClock("08:30"))

// // Mid-morning ==============> assertion passed
// currentOutput = formatAs12HourClock("10:00");
// targetOutput = "10:00 am";
// console.assert(
//   currentOutput === targetOutput,
//  `current output: ${currentOutput}, target output: ${targetOutput}`
// );
// console.log(formatAs12HourClock("10.00"))

// // Late morning ============> assertion passed
// currentOutput = formatAs12HourClock("11:45");
// targetOutput = "11:45 am";
// console.assert(
//   currentOutput === targetOutput,
//  `current output: ${currentOutput}, target output: ${targetOutput}`
// );
// console.log(formatAs12HourClock("11.45"))


// // Afternoon =============> assertion failed
// let currentOutput2 = formatAs12HourClock("12:00");
// let targetOutput2 = "12:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
// console.log(formatAs12HourClock("12:00"))

// // Early afternoon =============> assertion passed
// currentOutput2 = formatAs12HourClock("14:00");
// targetOutput2 = "02:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
// console.log(formatAs12HourClock("14:00"))

// // Mid afternoon =============> time display doesn't correspond
// currentOutput2 = formatAs12HourClock("15:30");
// targetOutput2 = "03:30 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
// console.log(formatAs12HourClock("15:30"))

// // Towards evening ==============> time display doesn't correspond
// currentOutput2 = formatAs12HourClock("17:30");
// targetOutput2 = "05:30 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
// console.log(formatAs12HourClock("17:30"))

// // Late night =============> assertion passed
// currentOutput2 = formatAs12HourClock("23:00");
// targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
// console.log(formatAs12HourClock("23:00"))


// Test result:
// Hours and Minutes worked in the AM function for different time test.
// 12:00 in the afternoon doesn't function correctly
// 00:00 mid-night doesnt work
// Minutes in the PM are not working.

// To fix bug:

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} am`
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  

  return `${time} am`;
}

const currentOutput = formatAs12HourClock("01:00");
const targetOutput = "01:00 am";
console.assert(
  currentOutput === targetOutput,
 `current output: ${currentOutput}, target output: ${targetOutput}`
);
console.log(formatAs12HourClock("01:00"))

const currentOutput2 = formatAs12HourClock("19:30");
const targetOutput2 = "7:30 pm";

console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

console.log(formatAs12HourClock("19:30"));
