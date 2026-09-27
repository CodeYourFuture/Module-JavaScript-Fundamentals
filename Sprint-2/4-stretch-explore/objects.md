In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in console.log and then hit enter

What output do you get?
It gives the expression : ƒ log() { [native code] }

Now enter just console in the Console, what output do you get back?
It gives the expression: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} with all the methods or functions that can be used for debugging.
Try also entering typeof console
It gives the string "object"

Answer the following questions:

What does console store? 
It stores a list of methods that can used in the browser's developer tools.

What does the syntax console.log or console.assert mean? In particular, what does the . mean?
Console.log means that you are accessing the log method of the console object. The dot (.) is called the member access operator or dot notation, it is used to access methods inside an object. it tells javascript to look inside the object on the left to get the method on the right.