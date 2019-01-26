const http = require('http');

let url = process.argv[2];

let callBack = (response) => {
    response.setEncoding('utf8');

    response.on('error', (error) => {
        console.error(error);
    });

    response.on('data', (data) => {
        console.log(data);
    });
};

http.get(url, callBack).on('error', console.error);