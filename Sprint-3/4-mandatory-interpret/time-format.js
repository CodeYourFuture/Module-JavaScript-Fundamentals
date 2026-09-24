console.log("entered data")
function pad(num) {
  console.log("pad has been called: Num is", num);
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  console.log("numString: ", numString);
  return numString;
}

function formatTimeDisplay(seconds) {
  console.log("entered formatTimeDisplay");
  const remainingSeconds = seconds % 60;
  console.log("remainingSeconds: ", remainingSeconds);
  const totalMinutes = (seconds - remainingSeconds) / 60;
  console.log("totalMinutes: ", totalMinutes);
  const remainingMinutes = totalMinutes % 60;
  console.log("remainingMinutes: ", remainingMinutes);
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  console.log("totalHours: ", totalHours);


  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61))
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Pad is being called 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1, The value given is the remainder after being used in remainingMinutes section of the code

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 01, after going through pad it ensures that there is two 00 if there is no value left, with just 1 it adds one 0 to the front of 1.
