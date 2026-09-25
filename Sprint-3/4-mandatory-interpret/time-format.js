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
// =============> 3 times because the return statement has three pad() calls in it. Hrs, Mins, Secs.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The first pad call pad(totalHours) worked out to 0

// c) What is the return value of pad when it is called for the first time?
// =============> The value is 00, add another because every pad wants 2 digits. 

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the last pad call receives 1 as its num because last call called is pad(remainingSeconds) which is calculated as seconds % 60.
//                and with the seconds being 61, that's 61 % 60 giving 1

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> The call is pad(1) and the pad adds a 0 to make the string 2 digits
