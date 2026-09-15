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
// pad will be called 3 times, once for each of the totalHours, remaininngMinutes, and remainingSeconds variables that are passed to the pad function in the return statement of formatTimeDisplay.
// Call formatTimeDisplay with an input of 61, now answer the following:
//
// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// the value assigned to num when pad is called for the first time is 0, which is the value of totalHours when formatTimeDisplay is called with an input of 61. This is because 61 seconds is equal to 1 minute and 1 second, which means there are 0 hours, 1 minute, and 1 second. Therefore, totalHours is 0, and this value is passed to the pad function as the argument num in return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;}.
// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// the return value of pad when it is called for the first time is "00".
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// when pad is called for the last time in this program, the value assigned to num is 1, which is the value of remainingSeconds.
// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// the return value of pad when it is called for the last time in this program is "01".
