function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here

// pad is called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// The value that assigned to num is 0

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here

// The return value of pad is: "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// The value assigned to num is 1. This is because 1 is the last character in the string 61

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here

// The return value is "01". when pad is called for the last time it takes the last character of the string 61.
// After checking remainingSeconds length which is less than 2 it adds a "0" and returns "01"