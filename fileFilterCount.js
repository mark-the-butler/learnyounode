const fs = require('fs');
const path = require('path');

let fileCount = (folder, fileExtension, callBack) => {
    fs.readdir(folder, (error, files) => {
        if(error) {
            return callBack(error);
        }

        let filteredFiles = files.filter(f => path.extname(f) === `.${fileExtension}`);

        callBack(null,filteredFiles);
    });
};

module.exports = fileCount;