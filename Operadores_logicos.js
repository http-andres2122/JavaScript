//AND Lógico (&&)
//devuelve true si ambos operandos son true; 
//de lo contrario, devuelve false.
console.log(true && true);
console.log(true && false);
console.log(true && (2 === 3));
//OR lógico (||)
//devuelve true si alguno de los operandos es true; 
//si ambos son falsos, devuelve false.
console.log(true || false);
console.log(false || false);
console.log('dog' || 'cat');
//NOT lógico (!)
//Devuelve false si su único operando se puede convertir a true; 
//de lo contrario, devuelve true.
console.log(!false);
console.log(!true);
console.log(!'cat');
//anidando varias verificaciones
console.log(true && true || false === !true && true)