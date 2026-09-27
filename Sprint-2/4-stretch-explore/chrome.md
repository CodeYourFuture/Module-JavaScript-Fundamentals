Open a new window in Chrome, right click page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

Click an empty space on tn the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?

// The `alert` function displays a message to the user and it stops js execution until the user dismisses the alert

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

// The `prompt` function opens a popup dialog and waits an input from a user. it stops js execution until the user inputs or cancel the popup dialog
// The return value of `prompt` is a string
