function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; // playing computer : 1
  const totalMinutes = (seconds - remainingSeconds) / 60; // playing computer : 1
  const remainingMinutes = totalMinutes % 60; // playing computer : 1
  const totalHours = (totalMinutes - remainingMinutes) / 60; // playing computer : 0

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`; // playing computer : 00:01:01
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?

// a) 🔄 pad is called 3 times:

// Once for hours
// Once for minutes
// Once for seconds

// This is because the time format is "HH:MM:SS" and each number needs padding!

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time? 0

// c) What is the return value of pad when pad is called for the first time?  "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer

// d) The value assigned to num when pad is called for the last time in this program is 1.
// This is because pad is called with the value of remainingSeconds, which is 1, or 61 % 60.
// 61 seconds is 1 minute and 1 second in total.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer

// e) The return value assigned to num when pad is called for the last time in this program is "01".
// This is because the pad function pads the number with a "0" if it is less than 10.
