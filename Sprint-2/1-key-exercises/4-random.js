const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

//1.num represents a number which is an Integer that is greater or equal to 1.
// That is because of the value of the minimum is 1.
//2.lets start by (maximum-minimum +1) which the output is 100.
//3.math.random()*100 returns random number between 0 and 100, what actually
//  happens is that math.random gives out random number from 0 to 1 which 1 is
//  not included and in this case, multiply the output by 100.
//4.math.floor() gives out the largest integer which is less than or equal to
//  the given number,which is decimal, which means it drops all the decimal. for example if
// the output is 69.5, it compares 69 with 69.5.The output will be 69 which is the largest Integer.
//5.at the end we add 1 which is the minimum.
console.log(num);
