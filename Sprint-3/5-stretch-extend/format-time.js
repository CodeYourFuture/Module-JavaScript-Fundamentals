// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// original code:
// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );

// my code:
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);
  let hours12;
  let timePeriod;

  if (hours === 0) {
    hours12 = "12";
    timePeriod = "am";
  }
  else if (hours === 12) {
    hours12 = "12";
    timePeriod = "pm";
  }
  else if (hours < 12) {
    timePeriod = "am";
    hours12 = String(hours).padStart(2, "0");
  }
  else if (hours > 12) {
    hours12 = String(hours - 12).padStart(2, "0");
    timePeriod = "pm";
  }
  return `${hours12}:${minutes} ${timePeriod}`
}

const cases = [
  { input: "00:00", expected: "12:00 am" },  // midnight
  { input: "01:00", expected: "01:00 am" },
  { input: "02:00", expected: "02:00 am" },  // your failing test
  { input: "09:00", expected: "09:00 am" },
  { input: "11:59", expected: "11:59 am" },
  { input: "12:00", expected: "12:00 pm" },  // noon
  { input: "12:30", expected: "12:30 pm" },
  { input: "13:00", expected: "01:00 pm" },
  { input: "23:00", expected: "11:00 pm" },  // your other test
  { input: "23:59", expected: "11:59 pm" },
];

function runTests(cases) {
  let passed = 0;
  for (const { input, expected } of cases) {
    const actual = formatAs12HourClock(input);
    const ok = actual === expected;
    if (ok) passed++;
    console.log(
      `${ok ? "PASS" : "FAIL"}  input: ${input}  expected: ${expected}  actual: ${actual}`
    );
  }
  console.log(`\n${passed}/${cases.length} passed`);
}
runTests(cases);