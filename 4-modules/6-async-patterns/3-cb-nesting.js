const fs = require('fs');

fs.readFile(__filename, function cb(err, data) {
    fs.writeFile(__filename + '.copy', data, function cb2(err) {
        //Nest more callbacks here
    });
});

console.log('TEST');