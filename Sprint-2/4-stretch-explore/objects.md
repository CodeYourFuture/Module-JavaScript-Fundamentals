## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
`console` stores the browser's debugging object. It contains methods such as `log`, `error`, `warn`, and `assert` that let us print values and inspect program state.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The `.` is the property access operator. It means "look inside the `console` object and use the `log` or `assert` method stored there".
So `console.log(...)` means “call the `log` method on the `console` object”.

Try also entering `typeof console`.
This returns `"object"`, because `console` is an object containing methods.
