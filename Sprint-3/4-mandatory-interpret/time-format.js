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
//  Pad will be called 3 times which is seen on line 15

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// 0

// c) What is the return value of pad when it is called for the first time?
// the return value of pad when called for the first time is 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// 1 second is stored in remainingSeconds so the value 1 is assigned to num when pad is called for the last time.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// the return value is 01 as the variable numString stores "01"
