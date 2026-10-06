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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Pad will be called 3 times because of the 3 arguments

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
0;

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
//00;

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value is 1 because the last pad argument is remainingSeconds. So 61 as the given seconds - remaining seconds = 1

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The answer is 01 because of the final output for formatTimeDisplay(61) is 00:01:01. The assigned value of 1 with the length of 1, the numString = "0" + numString becomes 01
