Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?
- A popup with chrome:/new-tab-page says "hello world"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
- A popup with chrome:/new-tab-page says "What is your name?" with a text box to type your name.

What is the return value of `prompt`?
- "myname" which is the value that i entered.
