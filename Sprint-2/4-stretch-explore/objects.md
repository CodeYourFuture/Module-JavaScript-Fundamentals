## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }, which is telling me what it is, a function

Now enter just `console` in the Console, what output do you get back?
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
MemoryInfo {totalJSHeapSize: 13400000, usedJSHeapSize: 11200000, jsHeapSizeLimit: 3760000000}
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
which is a list of methods in console

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
methods to interact with the console
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
it means, from the object console, access the function log or assert.
the fullstop is the connector to access the methods
