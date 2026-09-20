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
//console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable


// https://www.google.com/search?q=slice+mdn

const lastDotIndex = filePath.lastIndexOf(".");
const ext = filePath.slice(lastDotIndex + 1);



//const firstSlashIndex = filePath.indexOf("/");
//const dir = filePath.slice(firstSlashIndex + lastSlashIndex);
//const dir = filePath.slice(0 + lastSlashIndex);
//const dir = filePath.slice(0 + (lastSlashIndex - 1));
//const dir = filePath.slice(0 + (lastSlashIndex - 44));
const dir = filePath.slice(0, lastSlashIndex + 1);


console.log(dir)

