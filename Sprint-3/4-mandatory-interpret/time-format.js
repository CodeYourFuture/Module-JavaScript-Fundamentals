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
// Answer: Three times, once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer: 0, because 61 seconds contains 0 whole hours.

// c) What is the return value of pad when it is called for the first time?
// Answer: "00". pad converts 0 to a string and prepends a zero.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: 1, because the remaining seconds after 61 is divided into minutes is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// Answer: "01", because pad converts 1 to a string and prepends a zero.
