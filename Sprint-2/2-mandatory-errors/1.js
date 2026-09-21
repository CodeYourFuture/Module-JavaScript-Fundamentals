// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

console.log(age)

// The TypeError: Assignment to constant variable implies we are trying to reassign the variable twice.
// This case, I have used let instead in order to allow the variable to be reused.
// CN - added comment to have a clean commit .