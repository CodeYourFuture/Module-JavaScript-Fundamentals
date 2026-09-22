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
// =============> pad is called 3 times: once for hours, once for minutes and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0. The first call is pad(totalHours), and 61 seconds is 0 hours.

// c) What is the return value of pad when it is called for the first time?
// =============> "00". The while loop adds one "0" to "0" so the string has 2 characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1. The last call is pad(remainingSeconds), and 61 % 60 is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> "01". "1" has only 1 character, so the while loop adds one "0" in front.
