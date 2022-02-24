let currentDigits = [];

currentDigits.push(2);

let power = 1000;

for(let i = 0; i < power -1; i++){
    let add = 0; 
    currentDigits.forEach((digit, index)=>{
        if(digit*2 + add < 10){
            currentDigits[index] = digit*2 + add; 
            add = 0;
        }
        else{
            currentDigits[index] = (digit*2 + add) % 10;
            add = 1;
        }  
        
    })
    if(add === 1){
        currentDigits.push(1);
    }
    console.log(currentDigits);
}

function addArray(array){
    let total = 0;
    array.forEach(value=>{
        total += value;
    })
    return total; 
}

console.log(addArray(currentDigits));