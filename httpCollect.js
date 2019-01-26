const https = require('https');

let url = process.argv[2];

let callBack = (response) => {
    response.setEncoding('utf8');
    let allData = '',
    numberOfCharacters;

    response.on('error', (error) => {
        console.error(error);
    });

    response.on('data', (data) => {
        allData += data;
    });

    response.on('end', () => {
        numberOfCharacters = allData.length;

        console.log(numberOfCharacters);
        console.log(allData);
    });
};

https.get(url, callBack).on('error', console.error);

// Converted this to use https but the learnyounode exercise wants you to use http