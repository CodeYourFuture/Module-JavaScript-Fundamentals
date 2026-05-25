# Form Controls

## Learning Objectives

<!--{{<objectives>}}>-->

- [ ] Interpret requirements and check against a list of criteria
- [ ] Write a valid form
- [ ] Test with Devtools
- [ ] Refactor using Devtools
- [ ] Use version control by committing often and pushing regularly to GitHub
- [ ] Develop the habit of writing clean, well-structured, and error-free code
<!--{{<objectives>}}>-->

## Task

We are selling T-shirts. Write a form to collect the following data:

Our customers already have accounts, so we know their addresses and charging details already. We don't need to collect that data. We want to confirm they are the right person, then get them to choose a colour and size.

Writing that out as a series of questions to ask yourself:

1. What is the customer's name? I must collect this data and ensure it contains at least two non-space characters.
2. What is the customer's email? I must make sure the email is valid. Email addresses follow a consistent pattern.
3. What colour should this T-shirt be? I must provide 3 options. How will I ensure they do not choose other colours?
4. What size does the customer want? I must provide the following 6 options: XS, S, M, L, XL, XXL

All fields are required.
Do not write a form action for this project.

> [!TIP]
> To check whether the customer's name contains at least two non-space characters you may need to use a **regular expression** (or **regex** for short), which is a tool used to match patterns in text. If you wish to learn more about regular expressions there are plenty of resources on the web including the [official MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions), but for this task you can use this regex that we have pre-written for you: `.*\S.*\S.*`. 
>
> Now you have the regular expression, it's up to you to figure out how to use it in the context of an HTML form!

## Acceptance Criteria

### Developers must test their work.

Let's write out our testable criteria. Check each one off as you complete it.

- [ ] I have only used HTML and CSS.
- [ ] I have not used any JavaScript.

### HTML

- [ ] My form is semantic HTML.
- [ ] All inputs have associated labels.
- [ ] My Lighthouse Accessibility score is 100.
- [ ] I require a valid name. 
- [ ] I require a valid email.
- [ ] I require one colour from a defined set of 3 colours.
- [ ] I require one size from a defined set of 6 sizes.

### Developers must adhere to professional standards.

> Before you say you're done: Is your code readable? Does it run correctly? Does it look professional?

These practices reflect the level of quality expected in professional work.
They ensure your code is reliable, maintainable, and presents a polished, credible experience to users.

- [ ] My HTML code has no errors or warnings when validated using https://validator.w3.org/
- [ ] My code is consistently formatted
- [ ] My page content is free of typos and grammatical mistakes
- [ ] I commit often and push regularly to GitHub

## Resources
- [MDN: Form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN: Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Lighthouse Guide](https://programming.codeyourfuture.io/guides/testing/lighthouse)
- [Format Code and Make Logical Commits in VS Code](../practical_guide.md)
