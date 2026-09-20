## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

    answer: the output gives the function definition, i.e ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

     answer: it returns the console object with all its methods i.e (log,warn,error,assert,etc)

Try also entering `typeof console`

     answer: it outputs "object"

Answer the following questions:

What does `console` store?

     answer: it is a built-in global object that stores methods used to output messages, errors and warnings to the browser console

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

      answer: the "." is a property accessor used to access a property or a method in an object. so console.log mean go into the object and grab the log
