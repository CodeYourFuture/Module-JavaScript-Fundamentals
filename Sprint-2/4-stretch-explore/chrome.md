Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

### Answers

**Line 10 — What does calling `alert` do?**

When you call `alert`, a small popup box appears on the screen with the
message you gave it. Nothing else on the page works until you click OK.

**Lines 14-15 — What does calling `prompt` do? What is its return
value?**

When you call `prompt`, a small popup box appears with a question and
a
text box. The user can type an answer and click OK. Whatever they
typed
comes back to your code as text (a string).

If the user clicks Cancel instead, they get nothing back — you get a
special value called `null`, which just means "no value".