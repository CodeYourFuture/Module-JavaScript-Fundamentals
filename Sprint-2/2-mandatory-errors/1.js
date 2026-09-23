// trying to create an age variable and then reassign the value by 1

//const age = 33;
let age = 33;
age = age + 1;
console.log(age);

/* When we try to run the code it is giving us an error message saying TypeError: Assignment to constant variable, 
this error is telling us that we are trying to perform an operation on a value that is not the correct type, 
in our case reassigning a cons variable. The cons keyword prevents us from reassigning a variable
We can overcome the error by changing the declaration keyword to "let"
*/
