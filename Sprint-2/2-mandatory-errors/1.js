// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

// Error: TypeError: Assignment to constant variable. (at 1.js:4:5)
// Cause: On line 4, the code is trying to change the value of `age`. However, 
//        `age` was created using `const`, which means its value cannot be 
//        changed after it has been assigned.
// Fix: If the value of a variable needs to change later, use `let` instead of `const`.
