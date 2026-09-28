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
// =============> pad function will be called 3 times because it's been called 3 times in return statement.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============>  Starting value is 0

// c) What is the return value of pad when it is called for the first time?
// =============> returning value of pad when its called for the 2nd time is "00" :numString = "0" + numString:

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> When pad is called for the last time it's value is 1, The last call is pad(remainingSeconds), and remainingSeconds is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> // Return value is "01", num is 1, which becomes "1". Since its length is less than 2, the while loop adds "0" to the beginning, making it "01".
