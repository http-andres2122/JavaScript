/*
Ejemplo 1: escribir un procedimiento que muestre siete (7) veces en pantalla la frase “Esto es un algoritmo”.
*/

for (let i = 0; i < 7; i++) {
    console.log('esto es un algoritmo');
}

/*
Ejemplo 2: se necesita elaborar un algoritmo en JavaScript que, 
dado un número entero, sume todos los números naturales que hay hasta ese número. Por ejemplo, si el usuario digita 3, 
el programa debe sumar: 1 + 2 + 3, si el usuario digita 5 el programa debe sumar 1+2+3+4+5. 
Al finalizar, debe imprimir el resultado.
*/

const cantidad = 5;
var suma = 0;

for (let i = 1; i <= cantidad; i++) {
    suma += i; 
}

console.log(suma);