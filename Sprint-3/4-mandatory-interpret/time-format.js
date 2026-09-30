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
console.log(formatTimeDisplay(61));

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

// Seconds % 60 on line 10 gives the leftover 1, and that 1 goes into remainingSeconds. The last call is pad(remainingSeconds), so num is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here

// It gets remainingSeconds, which is 1.
// After checking remainingSeconds length which is less than 2 it adds a "0" and returns "01"
