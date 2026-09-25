Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

Calling alert shows a popup box directly on the webpage with the message you passed in, along with an "OK" button. The rest of the page becomes unclickable and any code after it pauses until the popup is dismissed.



Calling prompt shows a popup with a text input box, where the user can type a response, along with "OK" and "Cancel" buttons.

The return value of prompt is whatever the user typed in, returned as a string. If the user clicks "Cancel" instead of "OK", it returns null instead.