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
// 3 times. The return line calls pad once each for hours, minutes and seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0. The first call is pad(totalHours), and totalHours is 0 for an input of 61.

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// "00". num.toString() gives "0", which is shorter than 2 characters, so the
// while loop adds one "0" to the front. pad always returns a string.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1. The last call is pad(remainingSeconds), and remainingSeconds is 61 % 60 = 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01". num.toString() gives "1", which is too short, so the loop adds a "0"
// to the front.
console.log(formatTimeDisplay(61));