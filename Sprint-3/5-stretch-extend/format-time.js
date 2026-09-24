// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/*function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);*/

function formatAs12HourClock(time){
  if (typeof time != "string"){
    throw new Error (`Expected a string in "HH:MM" format, got ${typeof time}`);
  }
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(time);
  if(!match){
    throw new RangeError(`Invalid time "${time}": expected 24-hour "HH:MM" (00:00 to 23:59)`);
  }

  const hours = Number(match[1]);
  const minutes = match[2];
  const period = hours < 12 ? "am" : "pm";
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;

  return `${String(hours12).padStart(2, "0")}:${minutes} ${period}`;
}
console.log(formatAs12HourClock("23:20"))

function check(input, targetOutput){
  const currentOutput = formatAs12HourClock(input);
  console.assert(currentOutput === targetOutput, `input: ${input}. current output: ${currentOutput}, target output: ${targetOutput}`);
}

function checkThrows(input){
  let threw = false;
  try{
    formatAs12HourClock(input);
  }
  catch(error){
    threw = true;
  }
  console.assert(threw, `input: ${String(input)} should have thrown an error`);
}