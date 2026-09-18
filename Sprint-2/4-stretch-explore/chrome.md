Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?
Answer: Calling alert("Hello world!") displays a pop-up dialog box in the browser window containing the message "Hello world!" and an "OK" button that pauses script execution until dismissed.
Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
What effect does calling the `prompt` function have?
Answer: Calling prompt("What is your name?") displays a pop-up dialog box containing the message, a text input field, an "OK" button, and a "Cancel" button.

What is the return value of `prompt`?
Answer: It returns the string entered by the user in the input field when they click "OK". If the user clicks "Cancel" or closes the dialog, it returns null.
