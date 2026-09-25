const firstName = "Creola";
const middleName = "Katherine";
const lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

const initials = ``;

// https://www.google.com/search?q=get+first+character+of+string
// 
 grab the first letter of each string using `[0]`, and glue them together:

```javascript
const initials = firstName[0] + middleName[0] + lastName[0];
```

`firstName[0]` grabs whatever's sitting at position 0 in the string — the first letter — so that's `"C"`. Same deal for the other two, giving you `"K"` and `"J"`. The `+` just sticks the three letters together into one string, so you end up with `"CKJ"` 