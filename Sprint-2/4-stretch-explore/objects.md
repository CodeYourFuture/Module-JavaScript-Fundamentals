## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer: function log() { (native code) }

Now enter just `console` in the Console, what output do you get back?
Answer: Output is 'console {debug: function, error: function, info: function, log: function, warn: function, ...} with a drop down list of all functions'

Try also entering `typeof console`
Answer: output is 'object'

Answer the following questions:

What does `console` store?
Answer: this stores all the functions that the console has.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer: 'console' is an object and 'log/assert' is properties of log. the `.` is going to look-up which property is stored in the object
