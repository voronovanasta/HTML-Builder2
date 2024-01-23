const fs = require("fs");
const path = require("path");
const {stdout} = require("process");
const readline = require("readline");

const output = fs.createWriteStream(path.resolve(__dirname, "destination.txt"));

let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt(`What are your strengthes?`);
rl.prompt();
rl.on('line', (data) => {
    if (data.match(/^exit?$/i)) {
        stdout.write("Bye-bye!!!")
        rl.close();
    }
    else{
        output.write(`${data}\n`);
    }   
});

rl.on('close', ()=> stdout.write("Bye-bye!!!"))