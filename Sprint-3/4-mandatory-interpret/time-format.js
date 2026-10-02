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
// 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
// string "00"
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// remainingSeconds is 1, the last pad will execute so the function will divide 61 by 60 and then return the modulus or remainder which is 1. 
// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01", The pad function recieves the number 1 and converts it to a number string. 
// The while loop checks the string length to get 1. 1 is less than 2 therefore the loop executes and adds a 0 to the string giving "01".
// The loop will finishes because 2 is not less than 2. The function returns "01"
