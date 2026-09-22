## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
It stores the things shown above: errors, warnings, messages, info
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
I found that console.assert prints an error message only if a given condition is false (unlike console.log), in which case the `.` might mean the point from which they differentiate.
