const fs = require("fs");

function readTextFile() {
    let dataText = fs.readFileSync("data.txt", "utf8");
    return dataText;
}

let stringsArray = readTextFile().split("\r\n");

let valuesArray = [];

for(let i = 0; i < 13; i ++){
    total = 0; 
    stringsArray.forEach(string=>{
        total += parseInt(string[i]);
    })
    valuesArray.push(total * (10 ** (12 - i)));
}

function sumArray(array){
    total = 0; 
    array.forEach(number=>{
        total += number; 
    })
    return total; 
}

console.log(sumArray(valuesArray)); 