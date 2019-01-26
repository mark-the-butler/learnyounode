const fs = require('fs');

let filePath = process.argv[2];
let fileContents = fs.readFileSync(filePath).toString();
let contentsSplit = fileContents.split('\n');

console.log(contentsSplit.length - 1);