let x = 3;
function rst(){
    x = 3;
}
//Residuo (%)
console.log(12 % 5); 
//Incremento (++)
console.log('incremento x inicial:',x++)
rst();
console.log('incremento x final:',++x)
rst();
//Decremento (--)
console.log('decremento x final:',--x)
rst();
console.log('decremento x inicial:',x--)
rst();
//Negación unaria (-)
console.log('negacion unaria:',-x)
rst();
//Operador de exponenciación (**)
console.log('exponenciacion:', 2**x)