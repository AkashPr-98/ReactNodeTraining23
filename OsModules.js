const os = require('os')

console.log(os.arch());

const freeMemory = (os.freemem())
console.log(freeMemory);

console.log(os.totalmem());

console.log(os.homedir());

console.log(os.hostname());

console.log(os.machine());

console.log(os.platform());

console.log(os.release());

console.log(os.version());