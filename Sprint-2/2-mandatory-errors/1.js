// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;
console.log(age);

// Error: TypeError
// Why: Assignment to constant variable.
// Fix: Changed const to let, which allows the variable to be reassigned.