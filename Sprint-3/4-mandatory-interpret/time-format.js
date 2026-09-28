function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; // 1
  const totalMinutes = (seconds - remainingSeconds) / 60; // 1
  const remainingMinutes = totalMinutes % 60; // 1
  const totalHours = (totalMinutes - remainingMinutes) / 60; //0

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61)) // 00:01:01
// b) What is the value assigned to num when pad is called for the first time?
// 0

// c) What is the return value of pad when it is called for the first time?
// "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// 1

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// "01"
