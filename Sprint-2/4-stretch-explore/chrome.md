Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?
a pop-up box with a message of HELLO WORLD on the window
Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
the effect propmt displayed on the window is a pop-up box with an empty field to fill and with the string on top of it and when a user filled the field in. The filled in value gets displayed on the console.
What is the return value of `prompt`?
// the return value of the prompt as explained above is the answer or the value the user puts in the prompted field on the window.
