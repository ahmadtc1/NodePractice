const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', 'ddfsfa', '.npmrc'];

files.forEach(file => {
    try {
        const filePath = path.resolve(process.env.HOME, file);
        const data = fs.readFileSync(filePath, 'utf-42');
        console.log('File data is ' , data);
    }
    catch(err) {
        console.log('File not found');
    }
});