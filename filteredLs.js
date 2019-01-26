const fs = require('fs');
const path = require('path');

let folder = process.argv[2];
let ext = process.argv[3];

let listOfFiles = (error, files) => {
    if (error) {
        return console.error(error);
    }

    let filteredFiles = files.filter(f => path.extname(f) === `.${ext}`);

    filteredFiles.forEach(file => {
        console.log(file);
    });
};

fs.readdir(folder, listOfFiles);