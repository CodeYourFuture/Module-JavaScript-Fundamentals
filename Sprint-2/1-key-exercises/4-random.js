const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);


// num variable that carries the result of the expressions evaluated.
// (maximum - minimum) does basic math: 100 - 1 + 1 = 100
// Math.floor() takes out all decimal and make them an integer.
// Math.random() gives random numbers between 0 and 100.
// + minimum add 1 at the end but randomise to the value between 0 and 100