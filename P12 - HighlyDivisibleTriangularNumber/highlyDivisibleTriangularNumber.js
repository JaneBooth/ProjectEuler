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

let triangularNumbers = [1];

let i = 1;

let over500divisors = false; 

while(over500divisors === false){
    triangularNumbers.push(triangularNumbers[i-1]+i+1); 
    if(findFactors(triangularNumbers[i]).length > 500){
        over500divisors = true; 
    }
    i += 1;
}

console.log(triangularNumbers[triangularNumbers.length -1]);