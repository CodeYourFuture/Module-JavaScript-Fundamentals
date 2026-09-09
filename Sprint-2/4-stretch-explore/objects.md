## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }
Now enter just `console` in the Console, what output do you get back?
with a dropdown menu icon next to console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`
'object'
Answer the following questions:

What does `console` store?
console is a regular javascript object provided by the browser or node and stores functions and/or properties.
As the dot next to it is a property accessor on an object, console is an object that is built to store functions.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The "." is a property access on the object and means get something inside this object.
