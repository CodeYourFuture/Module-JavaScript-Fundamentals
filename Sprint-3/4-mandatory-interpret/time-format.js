function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  console.log(numString);
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
// =============> write your answer here: ***Answer*** :Function pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?:
// =============> write your answer here: ***Answer*** : The value assigned to num =61.

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here:  ***Answer*** :The value of pad  when it is called for the first time is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer:
// =============> write your answer here: ***Answer***: The last call of pad in this program is pad(remainingSeconds) => remainingSeconds= (61%60=1) => num = 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here : ***Answer*** : The value of pad when is called for the last time is the third part in `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}` => pad(remainingSeconds)=pad(1) since 1 has a length <2 return will be padded with 0 => pad (1)return "01".
