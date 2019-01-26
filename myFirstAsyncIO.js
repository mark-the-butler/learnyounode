const fs = require('fs');

let sumNewLines = (error, contents) => {
    if(error) {
        console.error(error);
    }

    console.log(contents.toString().split('\n').length - 1);
};

fs.readFile(process.argv[2], sumNewLines);