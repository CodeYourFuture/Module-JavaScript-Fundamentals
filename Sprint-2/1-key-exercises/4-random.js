const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);


// "num" variable carries the result/value of the expressions evaluated.
// (maximum - minimum) workout the size of the range: 100 - 1 + 1 = 100
// Math.floor() takes out all decimal and make them a whole number from 0 to 99.
// Math.random() gives a decimal from 0 up to just under 1 (0.9999999).
// + minimum add 1 to the expression at the end because it is decleared a variable.