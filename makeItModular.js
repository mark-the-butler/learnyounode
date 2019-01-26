const fileCount = require('./fileFilterCount');

let folder = process.argv[2];
let ext = process.argv[3];

let printFiles = (error, data) => {
    if (error) {
        return console.error(error);
    }

    data.forEach(file => {
        console.log(file);
    });
};

fileCount(folder, ext, printFiles);