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

// You will need to play computer with this example - use the Python Visualiser
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The value assigned to num is 0.

// c) What is the return value of pad when it is called for the first time?
// The return value is "00".

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// The value assigned to num is 1.
// The last call is pad(remainingSeconds), and when the input is 61,
// remainingSeconds is 1.

// e) What is the return value of pad when it is called for the last time in this program? Explain your answer
// The return value is "01".
// num is converted to the string "1". Because it has fewer than 2 characters,
// the while loop adds a "0" to the beginning, producing "01".