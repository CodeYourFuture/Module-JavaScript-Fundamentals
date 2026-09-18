const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

//num represents a number
//lets start by (maximum-minimum +1) which the output is 100.
//math.random()*100 returns random number between 0 and 100
//math.floor()it rounds a number to thier nearest integer,
//at the end we add 1.
console.log(num);
