let bool = true;
let num = 2;
let str = 'string';
let sym = Symbol("foo");
let intbig = BigInt(9007199254740991);
let ocbj = ['ana', 1008, 22];
function myFunc(elobjeto) {
    elobjeto.marca = "Toyota";
  }


console.log('seis (6) tipos de datos primitivos la referencia del lenguaje dice que son: ');

console.log('Data type:',typeof bool);
console.log('Data type:',typeof und);
console.log('Data type:',typeof num);
console.log('Data type:',typeof str);
console.log('Data type:',typeof intbig);

console.log('Otros tipos de datos más complejos o abstractos de datos:');

console.log('Data type:',typeof null);
console.log('Data type:',typeof ocbj);
console.log('Data type:',typeof myFunc);