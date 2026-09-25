## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Typing console.log (no parentheses) and hitting enter shows something like ƒ log() { [native code] }

Typing console on its own shows a big object with lots of properties, something like {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, ...} —

Typing typeof console returns "object", confirming that console itself is an object.

console is a built-in object provided by the browser that groups together a collection of related functions used for debugging like log, warn, error, and assert are all properties living inside this one object.

The dot is called dot notation, and it's how you access something that lives inside an object. Since console is an object containing several functions, the dot lets you reach in and grab one specific one by name. So console.log means "go into the console object and get the log function," and console.assert means the same thing but for the assert function. Each of these is a different tool grouped together under the one console object.
