## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
- log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
- console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}


Try also entering `typeof console`
- 'object'
Answer the following questions:

What does `console` store?
- console stores different functions you can use to display or check information in the console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
- console.log() method accepts any value and outputs that the given value to the console. 
- console.assert() takes a boolean first and displays the message only when the condition is false.
- "." means to access or call something inside this object either .log() or .assert() function.