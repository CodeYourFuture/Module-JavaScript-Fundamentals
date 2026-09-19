## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
console stores object. It stores a collection of methods that allow you to interact with the browser's developer console.
what does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
access the log property/method of the console object.
access the assert method of the console object.