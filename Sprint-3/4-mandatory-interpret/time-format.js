let padCalls = 0;
function pad(num) {
  padCalls++;
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
for (const s of [8784, 77, 77777]){
  padCalls = 0;
  const result = formatTimeDisplay(s);
  console.log(`formatTimeDisplay(${s})==> ${result}| pad called ${padCalls} times `);
}
console.log

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// The 'pad' function is called "three times" within the 'formatTimeDisplay' function
// The count will always be three because the 'return' statement contains three 'pad()' calls 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
