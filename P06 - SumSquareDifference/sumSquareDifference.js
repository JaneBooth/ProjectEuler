function sumOfSquares(max){
    let total = 0;
    for(let i = 0; i < max + 1; i ++){
        total += i**2; 
    }
    return total;
}

function squareOfSum(max){
    let sum = 0;
    for(let i = 0; i < max + 1; i ++){
        sum += i;
    }
    return sum**2; 
}

console.log(squareOfSum(100) - sumOfSquares(100));