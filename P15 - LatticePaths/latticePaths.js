let rowsArray = [];

let x = 20; 


let row1 = [];

for(let i = 0; i < 40; i ++){
    row1.push(i + 2);
}

rowsArray.push(row1);


for(let i = 1; i < x; i++){
    let newArray = [];
    newArray.push(i + 2);
    rowsArray[i-1].forEach((value, index)=>{
        if(index > 0){
            console.log(newArray.slice(-1)[0]);
            console.log(value);
            newArray.push(newArray.slice(-1)[0] + value);
        }
    })

    rowsArray.push(newArray);
}

console.log(rowsArray);
console.log(rowsArray[x-1][x-1]);
