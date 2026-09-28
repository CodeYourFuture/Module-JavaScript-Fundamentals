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
// 3 times (once for hours, once for minutes and once for seconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// With an input of 61 seconds, totalHours evaluates to 0. Therefore, num is assigned  0 on the first call

// c) What is the return value of pad when it is called for the first time?
// The return value is "00". Since the input is 0, its string length is less than 2, so the while loop runs it twice to prepend two zeros ("00")

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value assigned is 1. This is for remainingSeconds, which receives the remainder of 61 % 60, resulting in 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// The return value is "01". Because the input is 1, its string length is less than 2, so the while loop runs once to prepend a single zero("01")
