function isPalindrome(number){
    let numberString = number.toString();
    let bool = true; 
    for(let i = 0; i < numberString.length; i ++){
        if(numberString[i].valueOf() != numberString[numberString.length - (i + 1)].valueOf()){
            bool = false;
        }
    }
    return bool; 
}

function findAllThreeDigitProducts(){
    let threeDigitProducts = [];
    for(i = 100; i < 1000; i ++){
        for(j = 100; j < 1000; j ++){
            threeDigitProducts.push(i*j);
        }
    }
    return threeDigitProducts;
}

let threeDigitProducts = findAllThreeDigitProducts();

let productPalindromes = [];

threeDigitProducts.forEach(number=>{
    if(isPalindrome(number)){
        productPalindromes.push(number);
    }
})

console.log(productPalindromes);

function findLargestInArray(array){
    let max = 0; 
    array.forEach(number=>{
        if(number > max){
            max = number; 
        }
    })
    return max;
}

console.log(findLargestInArray(productPalindromes));