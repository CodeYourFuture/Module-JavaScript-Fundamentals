// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

//TypeError: Assignment to constant variable.
//Age is constant so can't be reassigned 
//To fix, change const to let, so line 3 becomes:
//let age = 33;