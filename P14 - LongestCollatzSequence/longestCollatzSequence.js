function generateCollatzSequence(number){
    let sequenceArray = [number];
    while(number != 1){
        if(number % 2 === 0){
            number = number / 2; 
        }
        else{
            number = (3 * number) + 1; 
        }
        sequenceArray.push(number);
    }
    return(sequenceArray);
}

let collatzArrays = [];

for(let i = 1; i < 1000000; i ++){
    collatzArrays.push(generateCollatzSequence(i));
}

let maxLength = 0; 
let maxIndex = 0; 

collatzArrays.forEach((array, index)=>{
    if(array.length > maxLength){
        maxLength = array.length;
        maxIndex = index;
    }
})

console.log(maxLength);
console.log(maxIndex);
console.log(collatzArrays[maxIndex]);