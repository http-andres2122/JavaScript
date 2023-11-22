//vectores
let frutas = ['Manzana', 'Banana', 'Pera'];

console.log(frutas.length);
console.log(frutas);

/*
Accediendo a elementos de un vector
*/

let numbers = [5, 20, 30, 80, 25];

console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers[numbers.length -1]);
console.log(numbers[numbers.length]);

/*
Ahora, se debe crear un programa que guarde los resultados de la tabla de 5 en un vector, 
con estos resultados recorrer el vector e imprimir la tabla del 5:
*/

let resultados = [];

for(let i = 1; i <= 10; i++){
    resultados.push(i * 5);
}

for(let i = 1; i <= 10; i++){
    console.log(' 5 x '+ i +' = '+ resultados[i-1]);
}

/*
Metodos mas comunes en los arreglos:
*/

//indexOf(), Devuelve el índice del primer elemento del array que sea igual a elemento Buscado, o -1 si no existe.
console.log(numbers.indexOf(25))
console.log(numbers.indexOf(5))
console.log(numbers.indexOf(56))

