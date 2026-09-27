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

console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3 times pad() will be called

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 is the value assigned to num.

// c) What is the return value of pad when it is called for the first time?
// =============>  00 is the value of pad when it was called for the first time.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 is the value of num when the pad is called for the last time. The last time pad is called is 
 // by by putting "remaining seconds"  which is 1 in the function pad .

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> 01 is the return value of pad.when pad()is called with the value of num 1 the expression 
// inside the pad function evaluates to a value 01. If we go through the code
// function pad(num) {
  //let numString = num.toString();===>   the value of numstring becomes "1"
  //while (numString.length < 2) { ===>   this line it is checking if numString.length< 2, numString.length is 1 in this line 
    //numString = "0" + numString; ===>     in this line numString will be 01. and again will go to while again to check if 
    //  }                                     numString.length is <2  and it is not then  pad() will return 01.
    // 
  //
