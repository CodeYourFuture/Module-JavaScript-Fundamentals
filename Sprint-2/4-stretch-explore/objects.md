## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer The output is ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
Answer console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, ...} but i can't copy it.


Try also entering `typeof console`
Answer It shows object'

Answer the following questions:

What does `console` store?
console is an object with properties that are function values. These functions are called methods because they belong to the console object.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log means "access the log method from the console object" and console.assert means "access the assert method from the console object.
