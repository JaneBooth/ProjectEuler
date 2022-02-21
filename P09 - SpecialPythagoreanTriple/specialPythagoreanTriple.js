function isPythagoreanTriple(a, b, c){
    if(a**2 + b**2 === c**2){
        return true; 
    }
    else{
        return false; 
    }
}

let possibleTriples = [];

for(let a = 1; a < 1000; a ++){
    for(let b = 1; b < 1000; b++){
        let c = 1000 - (a + b); 
        if(a < b && b < c){
            possibleTriples.push([a, b, c]);
        }
    }
}

let pythagoreanTriples = [];

possibleTriples.forEach(triple=>{
    if(isPythagoreanTriple(triple[0], triple[1], triple[2])){
        pythagoreanTriples.push(triple);
    }
})

function productOfArray(array){
    let product = 1; 
    array.forEach(number=>{
        product *= number; 
    })
    return product; 
}

console.log(productOfArray(pythagoreanTriples[0]));
