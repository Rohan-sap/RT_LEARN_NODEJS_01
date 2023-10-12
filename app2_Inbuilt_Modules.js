//4.OS
const OS = require('os');

//current uesr info
const user = OS.userInfo();
console.log(user);
//current PC Uptime
console.log(`Current Uptime for PC is ${OS.uptime()}`);

//More PC Details

const currentOS = {
    name: OS.type(),
    release: OS.release(),
    totalMem: OS.totalmem(),
    freeMem: OS.freemem()
}

console.log(currentOS);


//Path
const path = require('path');
console.log(path);


//
const filepath = path.join('/content/','subfolder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);


const filepath1 = path.resolve(__dirname,'/content/','subfolder', 'test.txt');
console.log(filepath1);