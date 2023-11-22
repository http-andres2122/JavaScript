///set variables
let x = 'ivan';
let y = 45;
let z = 15;
let l = '45';

//Igual (==), Devuelve true si los operandos son iguales.
console.log('igual:',l == y);
//No es igual (!=), Devuelve true si los operandos no son iguales
console.log('no es igual:',l != l);
console.log('no es igual:',l != z); 
//Estrictamente igual (===), Devuelve true si los operandos son iguales y del mismo tipo. 
//Consulta también Object.is y similitud en JS.
console.log('esrictamente igual:',l === y);
console.log('esrictamente igual:',l === l);
//Desigualdad estricta (!==)
//Devuelve true si los operandos son del mismo tipo, pero no iguales, o son de diferente tipo.
console.log('esrictamente desigual:',y !== x);
console.log('esrictamente desigual:',y !== y);
//Mayor que (>),Devuelve true si el operando izquierdo es mayor que el operando derecho.
console.log('Mayor que:',y > z);
console.log('Mayor que:',l > y);
console.log('Mayor que:',z > y);
//Mayor o igual que (>=), Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
console.log('Mayor o igual a:',y >= l);
console.log('Mayor o igual a:',y >= z);
console.log('Mayor o igual a:',z >= y);
//Menor que (<),Devuelve true si el operando izquierdo es menor que el operando derecho.
console.log('Menor que:',y < z);
console.log('Menor que:',l < y);
console.log('Menor que:',z < y);
//Menor o igual (<=), Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
console.log('Menor o igual:',y <= z);
console.log('Menor o igual:',l <= y);
console.log('Menor o igual:',z <= y);
