const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

//First operation
//num is generating  a random dicimal number with method Math.random() between 0 and 1 result eg :0.3948605

//Second operation
//The generated number is multiplied by the range+1  which is between 1-100 result eg 39.48605

//Third operation
//num is rounded down to the nearset whole number using the method Math.floor restult eg 39.48605 => 39

//Last operation is to add the  "minimum" (in this case it's 1 or it can be changed to any changed number e.g 10) this will shift the random number so it starts counting from minimum, instead of from zero.
//eg . num was 39 => 40
//num is a random whole number from 1 to 100.
