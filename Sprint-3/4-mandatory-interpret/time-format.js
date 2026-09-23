// let padCalls = 0;
let padCallCount = 0;
let firstNum;

function pad(num) {
  // padCalls++;
  padCallCount++;
  // if (padCallCount === 1){
  //   firstNum = num;
  // }
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
     if (padCallCount === 1){
      firstReturn = numString;
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
// for (const s of [8784, 77, 77777]){
//   padCalls = 0;
//   const result = formatTimeDisplay(s);
//   console.log(`formatTimeDisplay(${s})==> ${result}| pad called ${padCalls} times `);
// }
formatTimeDisplay(61);
console.log("The return value of pad when called for first time is:", firstReturn);

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
// for the first call to pad, num is assigned the value of 'totalHours', which is '0'
// Since the template literal is evaluated from left to right, calling 'formatTimeDisplay(61)', the calls occur in this order:
// totalHours, remainingMinutes, and remainingSeconds

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// For the first call to 'pad', 'num' is '0'
// The pad function will return '00' because it pads single-digit numbers with a leading zero

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
