## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
## Answers
- console.log is a function (native code).
- console is an object containing logging methods.
- typeof console is "object".
- console stores the browser/devtools console API object.
- The dot `.` means property access: console.log is the log property (a function) on the console object.
