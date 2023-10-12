// //another way to directly get the methods
// //const { readFileSync,writeFileSynch } = require('fs');

// const file = require('fs');
// // console.log(file);

// console.log(file.readFileSync('./content/subfolder/file1.txt', 'utf8'));
// console.log(file.readFileSync('./content/subfolder/file2.txt', 'utf8'));

// file.writeFileSync(
//     './content/subfolder/file3.txt', `Here is the result : 
//             ${file.readFileSync('./content/subfolder/file1.txt', 'utf8')},
//             ${file.readFileSync('./content/subfolder/file2.txt', 'utf8')}`
// )


//Async method using Callback function

const file = require('fs');

file.readFile('./content/subfolder/file1.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = data;

    file.readFile('./content/subfolder/file2.txt', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = data;

        file.writeFile('./content/subfolder/file4.txt', `Added data is ${first} + ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Added`)
        });

    });
});