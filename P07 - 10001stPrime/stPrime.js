function findFactors(number){
    let factors = [];
    for(let i = 1; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            factors.push(i);
            if(number/i != i){
                factors.push(number/i)
            }
            
        }
    }
    return factors;
}


function isPrime(number){
    if(findFactors(number).length == 2){
        return true;
    }
    else{
        return false;
    }
}

let primesArray = [];
let i = 1;

while (primesArray.length < 10001){
    if(isPrime(i)){
        primesArray.push(i);
    }
    i++;
}

console.log(primesArray[10000]);