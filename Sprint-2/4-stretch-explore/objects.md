## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

### Answers

**Q: What output do you get when you type `console.log` and press Enter?**

When I typed `console.log` in the console, I got back `ƒ log() { [native code] }`.
The `ƒ` symbol means it's a function. The `[native code]` part means the
function is built into Chrome — it wasn't written by a human in this file.

**Q: Now enter just `console` — what output do you get?**

I got a big list of things inside `console`. Things like `log`, `warn`,
`error`, `assert`, and many more. That's because `console` is a container
that holds lots of useful tools.

**Q: Try also entering `typeof console`.**

I typed `typeof console` and got back `"object"`. `typeof` is a way of
asking "what kind of thing is this?". The answer tells me that `console`
is an object.

**Q: What does `console` store?**

`console` stores a bunch of useful tools (called "functions") that help
me print things and check my code. Examples: `log`, `warn`, `error`,
`assert`, and many more.

**Q: What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?**

The dot `.` means "look inside". So `console.log` means:
"Look inside the `console` object and find the `log` thing inside it."
And `console.assert` means: "Look inside `console` and find `assert`."

The dot is like opening a box and grabbing one specific thing out of it.

**Example to show it clearly:**

Imagine a toolbox called `console`. Inside the toolbox are tools:
`log`, `warn`, `error`, `assert`. The dot `.` is how you pick one tool
out of the toolbox. So `console.log` means "from the console toolbox,
grab the log tool."