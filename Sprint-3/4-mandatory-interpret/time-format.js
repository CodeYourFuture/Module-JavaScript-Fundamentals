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
// =============> write your answer here

/* Answer: 
  The formatTimeDisplay function calls pad three times:
  pad(totalHours)
  pad(remainingMinutes)
  pad(remainingSeconds)
  So when formatTimeDisplay is called, pad will be called 3 times.
*/

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// =============> Answer: The pad function is called for the first time with the argument totalHours, which is 0. So the value assigned to num when pad is called for the first time is 0.

// c) What is the return value of pad when it is called for the first time?
// =============> write your answer here

// =============> Answer: numString = "0" (since 0.toString() is "0"), the while loop checks if "0"length is less than 2, which is true, "0" is padded with a "0" to become "00". So the return value of pad when it is called for the first time is '00'

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

/* =============> Answer: The formatTimeDisplay function is called with seconds = 61. Inside formatTimeDisplay, these variables are calculated:
remainingSeconds = 61 % 60 = 1
totalMinutes = (61 - 1) / 60 = 1
remainingMinutes = 1 % 60 = 1
totalHours = (1 - 1) / 60 = 0
The pad function is called three times with the values totalHours (0), remainingMinutes (1), and remainingSeconds (1), in that order.
The order of calls to pad is:
pad(0) (for totalHours)
pad(1) (for remainingMinutes)
pad(1) (for remainingSeconds)
The last call to pad is with the argument remainingSeconds, which is 1.
So, the value assigned to num when pad is called for the last time is 1.
*/

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here

/* Answer: 
The formatTimeDisplay function is called with seconds = 61.
Inside formatTimeDisplay, these variables are calculated:
remainingSeconds = 61 % 60 = 1
totalMinutes = (61 - 1) / 60 = 1
remainingMinutes = 1 % 60 = 1
totalHours = (1 - 1) / 60 = 0
The pad function is called three times with the values totalHours (0), remainingMinutes (1), and remainingSeconds (1), in that order.
The last call to pad is pad(1):

numString = "1" (since 1.toString() is "1").
The while loop checks if "1".length is less than 2, which is true.
"1" is padded with a "0" to become "01".
The function returns "01".
So, the return value of pad when it's called for the last time is "01".
*/
