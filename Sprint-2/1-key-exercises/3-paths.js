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
// console.log('The dir path of ${dir} is ${filePath}.${lastSlashIndex}'); 


// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(0, lastSlashIndex);
const ext = base.slice(base.lastIndexOf("."));

console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${base} is ${ext}`);

// https://www.google.com/search?q=slice+mdn