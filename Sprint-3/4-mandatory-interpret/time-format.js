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
// =============> write your answer here
//> pad() was called 3 times---> pad(totalHours)---> pad(remainingMinutes)---> pad(remainingSeconds)

// Call formatTimeDisplay with an input of 61, now answer the following:
// formatTimeDisplay(61);

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// pad(totalHours)--> totalHours= 0 --> Therefore num = 0

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here
//the first pad() call returns the answer 00, this is because the value is 0, and functions adds a 0 to the beginning of the character to make it two characters long.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 3 pad calls---> 1)-> pad(0), 2)-> pad(1), 3)-> pad(1)---> this shows the last call pad(remainingSeconds) = remainingSeconds= 1. when we call formatTimeDisplay(61); indicates that there are 61 seconds, after taking away 60 seconds which makes it 1 minute and the remainder is 1 second.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// when calling formatTimeDisplay(61); we already figured out the last pad() call is pad (remainingSeconds) and know that remainingSeconds is 1. Inside pad the number changes into a string "1" and the function then calculates and checks the length of the string but we wanted 2 characters/digits at least. Hence why the function adds 0 to the beginning which then gives us "01".
