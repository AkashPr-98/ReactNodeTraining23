const fs = require('fs')

// fs.writeFileSync('output.txt', "Hello! I am creating a new file")

// fs.writeFile('newOutput.txt', "Hello! This is a new file", () => {
//     console.log("File has been created");
// })

// const data = fs.readFileSync('newOutput.txt', 'utf-8')
// console.log("data", data);

fs.readFile('output.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }
    if(data){
        console.log(`This is my data: ${data}`);
    }
})

// fs.appendFile('output.txt', " and I am appending some more lines to this file", () => {
//     console.log("Data has been appended succesfully");
// })

// fs.writeFile('demo.txt', 'This is a demo file', () => {
//     console.log("Demo file created");
// })

// fs.truncate('demo.txt', 5, () => {
//     console.log('Truncate method running');
// })

fs.unlink('demo.txt', () => {
    console.log("The file has been deleted");
})

function a(){
   console.log("I am in function a");
}

function b(){
    console.log("I am in function b");
}

a()
b()