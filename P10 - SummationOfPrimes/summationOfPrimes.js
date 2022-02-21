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

let maxValue = 2000000; 

function findPrimesBelowNumber(number){
    let primesArray = [];
    for(i = 1; i < number; i ++){
        if(isPrime(i)){
            primesArray.push(i);
        }
    }
    return(primesArray);
}

let primesArray = findPrimesBelowNumber(maxValue);

function sumArray(array){
    let totalSum = 0; 
    array.forEach(number=>{
        totalSum += number;
    })
    return totalSum; 
}

console.log(sumArray(primesArray));