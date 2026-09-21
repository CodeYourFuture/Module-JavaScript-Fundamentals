Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?

// Alert brings a pop up window out and says "Hello world" from the page. It also has a button called "OK"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

// Opens a popup box with a text input. The value inside the () is what would display above the input. 
// The return value is myname? 

This is the code I did.
alert("Hello world")
undefined
prompt("What is your name")
'Tylerluvslasagne'
let myname = prompt("what is yur name")
undefined
console.log(myname)
VM319:1 I LOVE MY EX
undefined