let fibonacciNumbers = [];

fibonacciNumbers.push(1); 
fibonacciNumbers.push(2);

let index = 1; 

let lastNumberAdded = 2;

while(lastNumberAdded < 4000000){
    let newNumber = fibonacciNumbers[index] + fibonacciNumbers[index -1];
    fibonacciNumbers.push(newNumber);
    index += 1;
    lastNumberAdded = newNumber;
}

let sumOfEvens = 0;

fibonacciNumbers.forEach(number=>{
    if(number%2 == 0){
        sumOfEvens += number;
    }
})

console.log(sumOfEvens);

