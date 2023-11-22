//let: declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
let animal = 'elefante';
console.log('let: '+ animal);
//let podemos modificar el valor al igual que con var, solo que let es de ambito de bloque
animal = 3
console.log(animal)

//const: declara un nombre de constante de solo lectura y ámbito de bloque.
const cat = 'gato';
//con const no podemos modificar el valor por sus propiedades de lectura y bloque
console.log('cosnt: '+ cat);

//var: declara una variable, opcionalmente la inicia a un valor.
var dog = 'perro';
console.log('var: '+ dog);
//aca alteramos el valor de var1
dog = 2
//como  output es var1 o 2
console.log('var re-declarado: '+ dog);0


function example1() {
    const barrio = 'coburgo'
    let municipio = 'medellin';
    var temperatura = 38
    animal = 45
    // cat = 'perro' => error
    dog = '25'
    noicinializado = 'hola';
    return(
        console.log(barrio),
        console.log(municipio),
        console.log(temperatura),
        console.log(animal),
        console.log(dog),
        console.log(noicinializado)
    )
}

// console.log(barrio);
console.log(noicinializado);
example1();