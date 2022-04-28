//*Funciones
//!Se pueden llamar antes o después de definirla, a esto se le conoce como Hoisting.
/*
//Llamando a la funcion 
miFuncion(4,2); 
//Declaracion de la funcion 
function miFuncion(a,b) { 
    console.log("Suma: " + (a+b)); 
    //suma: 6, suma: 5 
} //Llamando a la funcion 
miFuncion(2,3);
*/

//*Funcion con return
//Declaracion de la funcion 
/*
function miFuncion(a,b) { 
    return a+b; 
} //Llamando a la funcion 
let resultado = miFuncion(2,3); 
console.log(resultado);
*/

//*Funcion de tipo expresion
//Declaracion de una funcion de tipo Expresion 
/*
let sumar = function (a, b) {
    return a + b
}; 
console.log(sumar(1,2));
*/
//*Funciones flecha
/*
const sumFunTipoFlecha = (a, b) => a + b; 
console.log(sumFunTipoFlecha(1,2));
*/