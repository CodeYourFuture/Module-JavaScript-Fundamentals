## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Answer

When I enter `console.log` in the Chrome DevTools Console, it shows the `log` function.

When I enter `console`, it shows an object containing different properties and methods, such as `log`, `error`, `warn`, and `assert`.

When I enter `typeof console`, the output is `"object"`.

What does `console` store?

`console` stores an object that contains methods used to interact with the browser's developer console, such as `log()`, `error()`, `warn()`, and `assert()`.

What does `console.log` or `console.assert` mean?

The `.` is used to access a property or method that belongs to an object.

For example, `console.log` means accessing the `log` method that belongs to the `console` object. Similarly, `console.assert` accesses the `assert` method of the `console` object.

So, the `.` basically means "access something that belongs to this object."
