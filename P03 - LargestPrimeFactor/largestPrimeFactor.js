

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

function findPrimeFactors(number){
    let factors = findFactors(number);
    let primeFactors = [];
    factors.forEach(factor=>{
        if(isPrime(factor) == true){
            primeFactors.push(factor);
        }
    })
    return(primeFactors);
}


function findLargestInArray(array){
    let largest = 0;
    array.forEach(number=>{
        if(number > largest){
            largest = number;
        }
    })
    return largest;
}

console.log(findLargestInArray(findPrimeFactors(600851475143)));