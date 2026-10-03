// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
function pad(num) {
  let stringNum = num.toString();
  if (stringNum.length < 2) {
    stringNum = "0" + stringNum;
    return stringNum;
  } else {
    return stringNum;
  }
}
function formatAs12HourClock(time = "") {
  if (typeof time != "string") {
    return "Not a valid format"; //check if time is a string
  }

  if (/\s/.test(time)) {
    return "Not a valid time"; //check for whitespace in string
  }

  if (
    (time.indexOf(":") === -1 && time.indexOf(".") === -1) ||
    (time.indexOf(":") !== -1 && time.indexOf(".") !== -1)
  ) {
    return "Not a valid time"; // check if there is only either one : or .
  }

  if (time.indexOf(":") === -1) {
    if (time.indexOf(".") !== time.lastIndexOf(".")) {
      return "Not a valid time"; //check there is only one .
    }
  }
  if (time.indexOf(".") === -1) {
    if (time.indexOf(":") !== time.lastIndexOf(":")) {
      return "Not a valid time"; //check if there is only one :
    }
  }

  let colonPeriodIndex = 0;
  if (time.indexOf(":") === -1) {
    colonPeriodIndex = time.indexOf(".");
  } else {
    colonPeriodIndex = time.indexOf(":");
  }

  if (
    time.slice(0, colonPeriodIndex) === "" ||
    time.slice(colonPeriodIndex + 1) === ""
  ) {
    return "Not a valid time"; //check if there is a number before and after time separator
  }
  const hours = Number(time.slice(0, colonPeriodIndex));
  const minutes = Number(time.slice(colonPeriodIndex + 1));
  const stringMinutes = pad(minutes);
  const stringHours = pad(hours);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours >= 24 ||
    hours < 0 ||
    minutes >= 60 ||
    minutes < 0 ||
    hours % 1 != 0 ||
    minutes % 1 != 0
  ) {
    return "Not a valid time";
  } //check if numbers are valid
  if (hours === 12) {
    return `${stringHours}:${stringMinutes} pm`;
  }
  if (hours === 0) {
    return `12:${stringMinutes} am`;
  }
  if (hours > 12) {
    return `${pad(hours - 12)}:${stringMinutes} pm`;
  }

  return `${stringHours}:${stringMinutes} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`,
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
);

const currentOutput3 = formatAs12HourClock("23:46");
const targetOutput3 = "11:46 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`,
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`,
);

const currentOutput5 = formatAs12HourClock("00:00");
const targetOutput5 = "12:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`,
);

const currentOutput6 = formatAs12HourClock("24:00");
const targetOutput6 = "Not a valid time";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`,
);

const currentOutput7 = formatAs12HourClock("47:00");
const targetOutput7 = "Not a valid time";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`,
);

const currentOutput8 = formatAs12HourClock("15:75");
const targetOutput8 = "Not a valid time";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`,
);

const currentOutput9 = formatAs12HourClock("18:60");
const targetOutput9 = "Not a valid time";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`,
);

const currentOutput10 = formatAs12HourClock("23:59");
const targetOutput10 = "11:59 pm";
console.assert(
  currentOutput10 === targetOutput10,
  `current output: ${currentOutput10}, target output: ${targetOutput10}`,
);

const currentOutput11 = formatAs12HourClock("00:01");
const targetOutput11 = "12:01 am";
console.assert(
  currentOutput11 === targetOutput11,
  `current output: ${currentOutput11}, target output: ${targetOutput11}`,
);

const currentOutput12 = formatAs12HourClock("12:01");
const targetOutput12 = "12:01 pm";
console.assert(
  currentOutput12 === targetOutput12,
  `current output: ${currentOutput12}, target output: ${targetOutput12}`,
);

const currentOutput13 = formatAs12HourClock("13:00");
const targetOutput13 = "01:00 pm";
console.assert(
  currentOutput13 === targetOutput13,
  `current output: ${currentOutput13}, target output: ${targetOutput13}`,
);

const currentOutput14 = formatAs12HourClock("hello");
const targetOutput14 = "Not a valid time";
console.assert(
  currentOutput14 === targetOutput14,
  `current output: ${currentOutput14}, target output: ${targetOutput14}`,
);

const currentOutput15 = formatAs12HourClock("15:ab");
const targetOutput15 = "Not a valid time";
console.assert(
  currentOutput15 === targetOutput15,
  `current output: ${currentOutput15}, target output: ${targetOutput15}`,
);

const currentOutput16 = formatAs12HourClock("12");
const targetOutput16 = "Not a valid time";
console.assert(
  currentOutput16 === targetOutput16,
  `current output: ${currentOutput16}, target output: ${targetOutput16}`,
);

const currentOutput17 = formatAs12HourClock("12:30abc");
const targetOutput17 = "Not a valid time";
console.assert(
  currentOutput17 === targetOutput17,
  `current output: ${currentOutput17}, target output: ${targetOutput17}`,
);

const currentOutput18 = formatAs12HourClock("1.30");
const targetOutput18 = "01:30 am";
console.assert(
  currentOutput18 === targetOutput18,
  `current output: ${currentOutput18}, target output: ${targetOutput18}`,
);

const currentOutput19 = formatAs12HourClock("15.30");
const targetOutput19 = "03:30 pm";
console.assert(
  currentOutput19 === targetOutput19,
  `current output: ${currentOutput19}, target output: ${targetOutput19}`,
);

const currentOutput20 = formatAs12HourClock("01.30");
const targetOutput20 = "01:30 am";
console.assert(
  currentOutput20 === targetOutput20,
  `current output: ${currentOutput20}, target output: ${targetOutput20}`,
);

const currentOutput21 = formatAs12HourClock("12.30:45");
const targetOutput21 = "Not a valid time";
console.assert(
  currentOutput21 === targetOutput21,
  `current output: ${currentOutput21}, target output: ${targetOutput21}`,
);

const currentOutput22 = formatAs12HourClock("12::30");
const targetOutput22 = "Not a valid time";
console.assert(
  currentOutput22 === targetOutput22,
  `current output: ${currentOutput22}, target output: ${targetOutput22}`,
);

const currentOutput23 = formatAs12HourClock("12..30");
const targetOutput23 = "Not a valid time";
console.assert(
  currentOutput23 === targetOutput23,
  `current output: ${currentOutput23}, target output: ${targetOutput23}`,
);

const currentOutput24 = formatAs12HourClock("12:");
const targetOutput24 = "Not a valid time";
console.assert(
  currentOutput24 === targetOutput24,
  `current output: ${currentOutput24}, target output: ${targetOutput24}`,
);

const currentOutput25 = formatAs12HourClock("12.");
const targetOutput25 = "Not a valid time";
console.assert(
  currentOutput25 === targetOutput25,
  `current output: ${currentOutput25}, target output: ${targetOutput25}`,
);

const currentOutput26 = formatAs12HourClock(":30");
const targetOutput26 = "Not a valid time";
console.assert(
  currentOutput26 === targetOutput26,
  `current output: ${currentOutput26}, target output: ${targetOutput26}`,
);

const currentOutput27 = formatAs12HourClock(".");
const targetOutput27 = "Not a valid time";
console.assert(
  currentOutput27 === targetOutput27,
  `current output: ${currentOutput27}, target output: ${targetOutput27}`,
);

const currentOutput28 = formatAs12HourClock("15:-30");
const targetOutput28 = "Not a valid time";
console.assert(
  currentOutput28 === targetOutput28,
  `current output: ${currentOutput28}, target output: ${targetOutput28}`,
);

const currentOutput29 = formatAs12HourClock("-15:30");
const targetOutput29 = "Not a valid time";
console.assert(
  currentOutput29 === targetOutput29,
  `current output: ${currentOutput29}, target output: ${targetOutput29}`,
);

const currentOutput30 = formatAs12HourClock(" :30");
const targetOutput30 = "Not a valid time";
console.assert(
  currentOutput30 === targetOutput30,
  `current output: ${currentOutput30}, target output: ${targetOutput30}`,
);

const currentOutput31 = formatAs12HourClock("12:30  ");
const targetOutput31 = "Not a valid time";
console.assert(
  currentOutput31 === targetOutput31,
  `current output: ${currentOutput31}, target output: ${targetOutput31}`,
);

const currentOutput32 = formatAs12HourClock("12:30\n");
const targetOutput32 = "Not a valid time";
console.assert(
  currentOutput32 === targetOutput32,
  `current output: ${currentOutput32}, target output: ${targetOutput32}`,
);
