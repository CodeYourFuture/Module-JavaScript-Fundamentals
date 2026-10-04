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
// The function pad will be called three times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//  num is assigned value of totalHours when pad is called first time because js evaluates expressions from left to right
// Therefore num will be assigned with 0 when it is called for the first time

// c) What is the return value of pad when it is called for the first time?
// The return value will be "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// num will be assigned the value of remainingSeconds when pad is called for the last time because js evaluates any expression
// from left to right and the pad with argument remainingSeconds is found at the right end
// Therefore num will be assigned with 1 when it is called for the last time

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// The return value of pad when it is called for the last time is "01"
// We calculated remainingSeconds in the function formatTimeDisplay and we got the value 1 then when pad is called with
// an argument value of remainingSeconds we changed the value to string and 0 is added before 1 and it became 2 digits which is "01"
