// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

// Answer: I got the error message TypeError: Assignment to constant variable.
// That is because age was declared using const, which makes it non-reassignable.
// I changed the const to let, so the variable age becomes reassignable
