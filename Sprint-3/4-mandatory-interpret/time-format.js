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
// =============>Pad will be called 3 times: once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> the first time pad is called, num gets the value of totalHours, which is 0.

// c) What is the return value of pad when it is called for the first time?
// =============> the first time pad is called, it returns 00 because num is 0 and pad adds a zero in front.
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the last time pad is called, num is 1 because there is 1 second left.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============>the last time pad is called, it returns 01 because num is 1 and pad adds a 0 in front.
