// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(0, lastSlashIndex);
/*correction : slice(0,lastSlashIndex); is the correct method to extract the dir path
    filePath.slice(start, end) => 0 represents the character 0 of the filePath String put 1 will skip the first charchter.
 */

const ext = filePath.slice(filePath.lastIndexOf(".") + 1);

// https://www.google.com/search?q=slice+mdn

console.log(`The dir part of the filePath ${filePath}variable is ${dir}`);

console.log(`The ext part of a variable file.txt is ${ext}`);
