// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

console.log(age);

// TypeError: Assignment to constant variable.
//This means javascript cannot reassign const variables. Let must be used in order for the variable to be reassigned so it can change. I  have now declared the variable using the let keyword and it now prints (34) in the console.
