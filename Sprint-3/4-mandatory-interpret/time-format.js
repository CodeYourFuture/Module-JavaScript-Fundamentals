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
// 3

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// num = 0

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// num = 1
// The three calls are:
// pad(totalHours)       -> pad(0)
// pad(remainingMinutes) -> pad(1)
// pad(remainingSeconds) -> pad(1)
// Therefore, the last call receives 1 as num.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01"
// num is 1, so numString starts as "1".
// Because its length is less than 2, "0" is added to the beginning.
// The function returns "01".
