// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/"); //44
const base = filePath.slice(lastSlashIndex + 1); //file.txt
console.log(`The base part of ${filePath} is ${base}`);

const dir = filePath.slice(0, lastSlashIndex);
const ext = base.slice(4);
console.log(dir);
console.log(ext);
// https://www.google.com/search?q=slice+mdn
