//Basic NodeJS 1

//1. const num = 11;
//import Modules from other files
const var1 = require('./app1_1');
const sayHi = require('./app1_2');
console.log(var1);
if (var1.num <= 10) {
    console.log("Number is small");
}
else {
    console.log("Number is big")
}

console.log(`NodeJS App`);

console.log(__dirname); //current Directory
// // // // // // // // // // // // // // // // // // // // // // 
//    setInterval(
//     () => {
//         console.log("Hello World");
//     }, 1000 );

////////Functions

// const sayHi = (name) => {
//     console.log(`Hi There My name is  ${name}`);
// }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // 

sayHi('Rohan');



//3.Another way to call Module function
require('./app1_3');
