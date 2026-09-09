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
// =============> pad will be called 3 times, once for each of the hours, minutes, and seconds values that are being formatted into a string.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============>Pad is called for the  first time with the value of 0, which is the total hours calculated from the input of 61 seconds.
// The total hours is calculated by dividing the total minutes (1) by 60, which results in 0 hours. pad(totalHours)

// c) What is the return value of pad is called for the first time?
// =============> 0 is the value assigned to num when pad is called for the first time, and the return value of pad is "00". This is because the while loop in the pad function adds a leading zero to the string representation of num until its length is at least 2. Since num is 0, it becomes "00" after one iteration of the loop.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> pad(remainingSeconds) remainingSeconds =1, so num is +1. This is because the input to formatTimeDisplay is 61 seconds, which results in 1 second remaining after calculating the total minutes and hours. The pad function is called with this value to format it as a two-digit string for display.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> numString = "1" so string has only one character "01" the return value of pad when it is called for the last time in this program is "01".
// This is because the while loop in the pad function adds a leading zero to the string representation of num until its length is at least 2.
// Since num is 1, it becomes "01" after one iteration of the loop.
//
