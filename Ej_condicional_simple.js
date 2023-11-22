/*
Ejemplo: un aprendiz aprueba un examen cuando la calificación de este es mayor o igual a 3. 
Elaborar un programa en JavaScript donde que dada una calificación, 
aplique el criterio de aprobación e imprima “Aprobado” o “Reprobado”, según sea el caso.
*/

const calificación = 4;

if(calificación >= 3 ){
    console.log('Aprobó');
}else{
    console.log('Reprobo');
}

/*
De la misma forma, se puede realizar el algoritmo que, dada una edad en años, evalúe e imprima si es mayor de edad:
*/ 

const edad = 41;

if( edad >= 18 ){
    console.log('Mayor de edad')
}else{
    console.log('usted no es mayor de edad')
}