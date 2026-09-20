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
// Answer: 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer: 0

// c) What is the return value of pad when it is called for the first time?
// Answer: "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: 1. Num is 1 in the last call to pad, because the argument sent into pad is remainingSeconds, which is
// 1 because 1 is the remainder after dividing 61 with 60.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// Answer: "01". The return value is "01" because pad first turned 1 into a string "1", and then used a while loop
// to concatenate (pad) zeros at the start of the "1" string until it became two in length.
