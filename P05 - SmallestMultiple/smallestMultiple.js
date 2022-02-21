function isDivisible(x, y){
    if( x % y == 0){
        return true;
    }
    else{
        return false;
    }
}

let divisorsArray = [];

for(let i = 1; i < 21; i++){
    divisorsArray.push(i);
}

let smallestMultiple = 0; 
let i = 1;

while(smallestMultiple === 0){
    i += 1; 
    let bool = true; 
    divisorsArray.forEach(divisor=>{
        if(isDivisible(i, divisor) === false){
            bool = false;
        }
    })
    if(bool === true){
        smallestMultiple = i;
    }
}

console.log(smallestMultiple);