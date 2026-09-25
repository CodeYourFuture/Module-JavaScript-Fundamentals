## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer: It outputs the function definition itself, showing `ƒ log() { [native code] }`.

Now enter just `console` in the Console, what output do you get back?
Answer: It returns the `console` object containing various built-in properties and logging methods.

Try also entering `typeof console`
Answer: It outputs `"object"`.

Answer the following questions:

What does `console` store?
Answer: `console` is a built-in global object that stores properties and methods used to output messages, errors, and warnings to the browser console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer: The dot (`.`) is the property accessor operator. It is used to access specific methods (`log`, `assert`) attached to the `console` object.