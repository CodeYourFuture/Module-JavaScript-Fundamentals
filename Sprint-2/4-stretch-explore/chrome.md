Open a new window in Chrome, right click an empty space on the page, select **Inspect** from the dropdown, then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console, invoke the function `alert` with one argument, the string `"Hello world!"`;

What effect does calling the `alert` function have?

//alert is a function name and we are storing Hello world! as the argument. alert then alerts the screen with a banner with chrome url that says "Hello world!"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

//when using prompt and input the argument "what is your name?" and press enter we get a text box where it asks for your name(because of the variable) and a cancel and ok button. you input the question, the function is what prompt() gives back and that is the return value.

What effect does calling the `prompt` function have?

//the prompt function displays a pop-up input box asking "what is your name?" prompt asks a question and users give an input and the prompt then returns that input.

What is the return value of `prompt`?

//we need to create a variable first ' const myName = prompt ("what is your name?"); that stores the returned value in the variable.
