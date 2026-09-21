## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
// Console is an object that stores properties as fucntions. (Think of import = math, math.sqrt(9))

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// It means that you are calling on console to run this particular function in your javascript code.
// console.log: access property(log) inside object(console).
// The . is the property access operator.
// The () contain an argument(s) which run the code.

My code:
console.log
    ƒ log() { [native code] }
console
    console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
typeof console
    'object'