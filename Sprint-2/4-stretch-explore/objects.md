## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

=========> `ƒ log() { [native code] }`

Now enter just `console` in the Console, what output do you get back?

=========> `Object { assert: assert(), clear: clear(), context: VM107:1, count: count(), debug: debug(), dir: dir(), dirxml: dirxml(), error: error(), group: group(), groupCollapsed: groupCollapsed(), 11 more… }`

Try also entering `typeof console`

=========> `object`

Answer the following questions:

What does `console` store?

=========> `console` stores a collection of methods that allow you to interact with the console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

=========> The `.` is a property accessor that allows you to access the methods and properties of an object. In this case, `console.log` and `console.assert` are methods of the `console` object.
