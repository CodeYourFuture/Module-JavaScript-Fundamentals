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
// 3 times: once each for totalHours, remainingMinutes and remainingSeconds in the return line.

// Call formatTimeDisplay with an input of 61, now answer the following:
// With seconds = 61: remainingSeconds = 61 % 60 = 1, totalMinutes = (61 - 1) / 60 = 1,
// remainingMinutes = 1 % 60 = 1, totalHours = (1 - 1) / 60 = 0.
// formatTimeDisplay(61) returns "00:01:01".

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0. The first call is pad(totalHours), and totalHours is 0.

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// "00". num.toString() gives "0", which is 1 character long, so the while loop adds
// one "0" to the front, making it 2 characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1. The last call is pad(remainingSeconds), and remainingSeconds is 61 % 60 = 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01". "1" has length 1, so the while loop adds one leading "0", then stops once the
// length is 2.

console.log(formatTimeDisplay(61)); // 00:01:01