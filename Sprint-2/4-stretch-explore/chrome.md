Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?

   answer: it displays a pop-up dialog box in the browser window containing the message "Hello World!" and an ok button that pauses the page execution until the user dismisses it

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
   answer: it pops up a box asking a question with a text field where you can type in your answer, plus an OK and cancel buttons.

What is the return value of `prompt`?

   answer: it returns the text typed by the user as a string in the text input field when they click ok.
