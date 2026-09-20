const minimum = 1;
const maximum = 100;
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(`${num}`);

//num represents a random whole number between 1 and 100,
//first we calculate value inside parentheses(maximum - minimum +1) = 100 -1 + 1 =100
// math.random return number between 0 and 1
// math.random() * 100 give us a decimal number
// math.floor round down the number
// add 1 to the result
//for example math.floor((0.783 *100))=78 + 1 = 79
