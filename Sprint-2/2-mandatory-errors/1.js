// The error occurs because age is declared with const, so its value cannot be reassigned.
// The next line tries to assign a new value to age, which causes a TypeError.
// Using let fixes the error because let allows the variable to be reassigned.

let age = 33;
age = age + 1;
console.log(age);