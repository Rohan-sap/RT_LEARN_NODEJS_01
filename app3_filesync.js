//another way to directly get the methods
//const { readFileSync,writeFileSynch } = require('fs');

const file = require('fs');
// console.log(file);

console.log(file.readFileSync('./content/subfolder/file1.txt', 'utf8'));
console.log(file.readFileSync('./content/subfolder/file2.txt', 'utf8'));

file.writeFileSync(
    './content/subfolder/file3.txt', `Here is the result : 
            ${file.readFileSync('./content/subfolder/file1.txt', 'utf8')},
            ${file.readFileSync('./content/subfolder/file2.txt', 'utf8')}`
)