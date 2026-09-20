const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

//1.num represents a number which is an Integer.
//2.lets start by (maximum-minimum +1) which the output is 100.
//3.math.random()*100 returns random number between 0 and 100, what actually
//  happens is that math.randum gives out random number from 0 to 1 which 1 is 
//  not included and in this case, multiply the out put by 100.
//4.math.floor()it rounds a number to thier nearest integer, which means it drops all the decimal.
//5.at the end we add 1 which is the minimum.
console.log(num);
