// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

//const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
//const lastSlashIndex = filePath.lastIndexOf("/");
//const base = filePath.slice(lastSlashIndex + 1);
//console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable


//const dir = ;
//const ext = ;

// https://www.google.com/search?q=slice+mdn

// from here start my explaination of the code I see for education purposes.
// this is a file system that allows users to manipulate what files they see and what information they omit, and they use string 
//methods to do that 
// most common methods developers use to manipulate the files are included in this file Sprint-2\1-key-exercises\manipulating files.txt

//  in this example the string methods are used to manipulate the file system

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
// a variable is created to store the file path of a file in the file system
//const lastSlashIndex = filePath.lastIndexOf("/");
// a variable is created and identified to find the last occurance of the "/" character in the filePath variable, which is used to separate directories and files in a file system
//const base = filePath.slice(lastSlashIndex + 1);
// a variable is created and identified to extract the base part of the filePath variable, which is the name of the file and its extension, by using the slice method 
//console.log(`The base part of ${filePath} is ${base}`);
// console.log is used to print the base part of the filePath variable to the console, which is the name of the file and its extension

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const lastSlashIndex = filePath.lastIndexOf("/");
// here we have the variable lastslashIndex already created and identified its position
// stores the position or (index) of "/" in filePath, so this "/" is used as a symbol that storers the number index or a place that seprate dir from base 
const dir = filePath.slice(0, lastSlashIndex);
console.log(dir);
// we show our result in the console
const lastDotIndex = filePath.lastIndexOf('.');
// we create a variable and assign its value using the indexOf to be from the dot location
const ext = filePath.slice(lastDotIndex);
// we create a variable where we assign its value using the slice method to be from the dot only

console.log(ext)
// we print our result in the console
//slice(startIndex, endIndex)
// means, start here and stop here. we are doing this to seprate the dir from base so we need to tell it where to start and where to end, hence that is why we use slice method,
// my comments needs correcting to look profissional -_-