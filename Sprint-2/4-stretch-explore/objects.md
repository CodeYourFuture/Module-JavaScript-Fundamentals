## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

(ƒ log() { [native code] })

Now enter just `console` in the Console, what output do you get back?
(console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …})

Try also entering `typeof console`
('object')
Answer the following questions:

What does `console` store?
(`console` stores an object. Note for question: where is this object source from?)
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
(`log` is a method to print object belongs to console. The `.` access that object stored in `console`)
(`assert`checks if a condition is true.)
