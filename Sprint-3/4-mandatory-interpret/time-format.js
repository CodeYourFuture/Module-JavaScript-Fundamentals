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
// =============> The pad function is called three times on line 15.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The value assigned to num is 0.

// c) What is the return value of pad when it is called for the first time?
// =============> The value of pad when it is called for the first time "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The value assign to num is 1.
//  because the last call to pad is pad(remainingSeconds), and remainingSeconds is 1
// when formatTimeDisplay(61) is called.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> The return value is "01" because the last call to pad is pad(1).
// The pad function add a zero to make the number two digits.
