// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

// =============> TypeError: Assignment to constant variable.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
// =============> I fixed the error by changing the const keyword to let, which allows the value to be reassigned
