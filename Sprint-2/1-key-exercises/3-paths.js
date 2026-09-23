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
const ext = filePath.slice(filePath.lastIndexOf("."));
//lastIndexOf() method works better here because it'll look for the last time "." appears in the file path which will always give the correct file ext instead of going a set number back with the slice() method i used previously  which may not work for every file extension depending on it length. So now console.log will print .txt or .jpeg if that was the file ext
console.log(ext);
// https://www.google.com/search?q=slice+mdn
