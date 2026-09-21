## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

it showed the log function rather than calling it f log() { [natice code]}

Now enter just `console` in the Console, what output do you get back?

the console objects and properties/functions ie, {debug:f, error:f, info:f, log:f, warn:f,...}

Try also entering `typeof console`

we get 'object' why?--> because console is an object

Answer the following questions:

What does `console` store?

console is an object that contains properties/functions used to interact with chrome/browser developer console. 

What does the syntax `console.log` or `console.assert` mean? 

console.log = access the log property inside the console object.
console.assert = access the assert property inside the console object.

In particular, what does the `.` mean?

The dot . is called the property accessor operator used to access an object's property. It also tells Javascript to go inside this object and get a particular property.
