// trying to create an age variable and then reassign the value by 1

// The problem here is that 'const' creates a constant variable which cannot be reassigned, attempting to reassign (age = age + 1) throws a TypeError: Assignment to constant variable.


//change 'const' to 'let' so the value can be updated
// const age = 33;
let age = 33;
age = age + 1;

// console.log(age);
