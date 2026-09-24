function pad(num) {
  // console.log(num)
  let numString = num.toString();
  // console.log(numString, "numstr")
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  //  console.log(numString, "FULLNUM")
  return numString;
}


function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61))




// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here 
// Answer below:
// Pad runs once for "totalHours", once "remainingMinutes" and once for "remainingSeconds" in total pad is called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here 
// Answer below:
// The first pad is pad(totalHours) and the value is 0

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// The value is 0 plus the "0" added to it to make the value 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here 
// Answer below:
// The last call is pad(remainingSeconds) and the value is 1

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here 
// Answer below:
// the return value initially is 1 and "0" was added to it in front to make the value 01
