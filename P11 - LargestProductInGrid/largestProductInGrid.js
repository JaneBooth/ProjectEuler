const fs = require("fs");

function readTextFile() {
    let dataText = fs.readFileSync("data.txt", "utf8");
    return dataText;
}

let linesArray = readTextFile().split("\r\n");

let numbersArray = [];

linesArray.forEach(line=>{
    numbersArray.push(line.split(" "));
})

console.log(numbersArray);

function productOfArray(array){
    let product = 1; 
    array.forEach(number=>{
        product *= number; 
    })
    return product; 
}

allProducts = [];

function addHorizontalProducts(array){
    array.forEach(row =>{
        for(let i = 0; i < row.length - 4; i ++){
            allProducts.push(productOfArray([parseInt(row[i]), parseInt(row[i+1]),parseInt(row[i+2]),parseInt(row[i+3])]));
        }
    })
}

function addVerticalProducts(array){
    for(let i = 0; i < array[0].length; i ++){
        for(let j = 0; j < array.length - 4; j ++){
            allProducts.push(productOfArray([parseInt(array[j][i]), parseInt(array[j + 1][i]), parseInt(array[j+2][i]), parseInt(array[j + 3][i])]));
        }
    }
}

function addDiagonalProducts(array){
    for(let i = 0; i < array[0].length - 4; i ++){
        for(let j = 0; j < array.length - 4; j ++){
            allProducts.push(productOfArray([parseInt(array[j][i]), parseInt(array[j + 1][i + 1]), parseInt(array[j+2][i + 2]), parseInt(array[j + 3][i + 3])]));
        }
    }
    for(let i = 3; i < array[0].length; i ++){
        for(let j = 0; j < array.length - 4; j ++){
            allProducts.push(productOfArray([parseInt(array[j][i]), parseInt(array[j + 1][i - 1]), parseInt(array[j+2][i - 2]), parseInt(array[j + 3][i - 3])]));
        }
    }
}

addHorizontalProducts(numbersArray);
addVerticalProducts(numbersArray);
addDiagonalProducts(numbersArray);

function maxOfArray(array){
    let max = 0; 
    array.forEach(number=>{
        if(number > max){
            max = number; 
        }
    })
    return max; 
}

console.log(maxOfArray(allProducts));