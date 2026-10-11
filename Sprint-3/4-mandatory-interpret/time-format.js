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
// =============> write your answer here: three calls to pad() in the return statement:
//return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here:
//For formatTimeDisplay(61):
//remainingSeconds = 61 % 60 = 1
//totalMinutes = (61 - 1) / 60 → 1
//remainingMinutes = 1 % 60 → 1
//totalHours = (1 - 1) / 60 → 0
//num = 1

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here:num is 0.
//let numString = num.toString(); gives us 0

// This loop adds a "0" because the string has only one character:
//numString = "0" + "0";
//return value is:
//"00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here:
//The last call is:   pad(remainingSeconds)

//For 61 seconds, remainingSeconds is 61 % 60 = 1:
//so num = 1

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here:
//num is 1, so:
//num.toString() gives "1".

// and this loop adds a 0 to the beginning: "01"

//So the final result of formatTimeDisplay(61) is: 00:01:01
