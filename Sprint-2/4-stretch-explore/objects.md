## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer : an object : log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
Answer : an object
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert
:
ƒ assert()
clear
:
ƒ clear()
context
:
ƒ context()
count
:
ƒ count()
countReset
:
ƒ countReset()
createTask
:
ƒ createTask()
debug
:
ƒ debug()
dir
:
ƒ dir()
dirxml
:
ƒ dirxml()
error
:
ƒ error()
group
:
ƒ group()
groupCollapsed
:
ƒ groupCollapsed()
groupEnd
:
ƒ groupEnd()
info
:
ƒ info()
log
:
ƒ log()
memory
:
MemoryInfo {totalJSHeapSize: 19300000, usedJSHeapSize: 18200000, jsHeapSizeLimit: 3760000000}
profile
:
ƒ profile()
profileEnd
:
ƒ profileEnd()
table
:
ƒ table()
time
:
ƒ time()
timeEnd
:
ƒ timeEnd()
timeLog
:
ƒ timeLog()
timeStamp
:
ƒ timeStamp()
trace
:
ƒ trace()
warn
:
ƒ warn()
Symbol(Symbol.toStringTag)
:
"console"
[[Prototype]]
:
Object

Try also entering `typeof console`

Answer : object
Answer the following questions:

What does `console` store?
Answer : The console object does not permanently store data; instead, it provides an interface to record, display, and inspect temporary logs, warnings, and errors in the environment's debugging tool or terminal.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Answer :

The console.log() is a method that accepts any value and outputs that the given value to the console

The console.assert() is a static method that writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

The `.` is dot notation — it access the methods that belongs to the console object. such as log, assert, error .... ext
