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
// 0

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1. Last time it is called is pad(remainingSeconds). remainingSeconds = seconds % 60
// with seconds = 61 this expression evaluates to 1, so when 1 is passed to pad, num is
// assigned 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01". Num is 1 which converted to the string "1" which is assigned to numString.
// The while loop runs while numString length less than 2, and adds "0"
// to the beginning string. So "1" becomes "01". the string length is now equal to two,
// so the while loop exits and numString is returned with value "01"
