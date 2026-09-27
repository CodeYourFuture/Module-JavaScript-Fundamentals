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
// =============> write your answer here : 3 times, once for totalHours, once for remainingMinutes, once for remainingSeconds, since the template literal contains three separate pad(...) calls.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here : totalHours is 0, num is 0 on the first call.

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here : pad(remainingSeconds), and since remainingSeconds is 1, num is 1 on this final call.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here : "01"
