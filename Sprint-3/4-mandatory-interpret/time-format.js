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

// You will need to play computer with this example – use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// ==============> write your answer here
// pad will be called 3 times — once for totalHours, once for remainingMinutes,
// and once for remainingSeconds, since all three appear inside the template
// literal on the return line.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// ==============> write your answer here
// num = 0 (this is totalHours, since (61-1)/60 = 1 minute total, and
// (1-1)/60 = 0 hours, and pad(totalHours) is the first call in the template
// literal)

// c) What is the return value of pad it is called for the first time?
// ==============> write your answer here
// "00" — pad(0) converts 0 to the string "0", which has length 1, so a
// leading "0" is added, making it "00"

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// ==============> write your answer here
// num = 1 (this is remainingSeconds — 61 % 60 = 1 — and pad(remainingSeconds)
// is the last of the three pad() calls in the template literal)

// e) What is the return value of pad when it is called for the last time in this program? Explain your answer
// ==============> write your answer here
// "01" — pad(1) converts 1 to the string "1", which has length 1, so a
// leading "0" is added, making it "01"

console.log(formatTimeDisplay(61)); // "00:01:01"