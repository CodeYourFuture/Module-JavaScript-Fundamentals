// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPence(penceString) {
	const penceStringWithoutTrailingP = penceString.substring(
		0,
		penceString.length - 1,
	);

	const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
	const pounds = paddedPenceNumberString.substring(
		0,
		paddedPenceNumberString.length - 2,
	);

	const pence = paddedPenceNumberString
		.substring(paddedPenceNumberString.length - 2)
		.padEnd(2, "0");

	return `£${pounds}.${pence}`;
}

console.log(toPence("399p")); // output £3.99
console.log(toPence("50p")); // output £0.50
console.log(toPence("1200p")); // output £12.00
console.log(toPence("5p")); // output £0.05
