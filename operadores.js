//Tipos de operadores
//*Asignación-------------------------------------------------------------------------
let a = 3, b = 2;
//*Aritmeticos-------------------------------------------------------------------------
let z = a + b; 
console.log("Resultado de la suma: " + z);

z = a - b; 
console.log("Resultado de la resta: " + z);

z = a * b; 
console.log("Resultado de la multiplicacion: " + z);

z = a / b; 
console.log("Resultado de la division: " + z);

z = a % b; 
console.log("Resultado del modulo: " + z);

z = a ** b; 
console.log("Resultado de la potenciacion: " + z);

//*Relaciones-------------------------------------------------------------------------
/*
a = 3, b = 2,c = "3";
z = a == c; //*se revisa el valor sin importar el tipo
console.log(z);

z = a != c; //*se revisa el valor sin importar el tipo 
console.log(z);
*/

//*Ejemplo de Es mayor de edad
/*
let edad = 15, adulto = 18; 
if ( edad >= adulto) { 
    console.log("Es adulto"); 
} else { 
    console.log("Es menor de edad"); 
}
*/

//*Logicos---------------------------------------------------------------------------------
/*
//*Operador lógico AND
a = 5; let valMin = 0; 
valMax = 10; 
if (a >= valMin && a <= valMax) { 
    console.log("Dentro de rango"); 
} else { 
    console.log("Fuera de rango"); 
}
*/

//*Operador lógico OR
/*
let vacaciones = true, 
diaDescanso = false; 
if (vacaciones || diaDescanso ) { 
    console.log("El padre puede asistir al juego del hijo"); 
} else { 
    console.log("El padre esta ocupado"); 
}
*/

//*Typeof
//console.log(typeof vacaciones)

//*Instanceof
/*
color1=new String("verde")
console.log(color1 instanceof String )// devuelve verdadero (true)
color2="coral"
console.log(color2 instanceof String) // devuelve falso (color2 no es un objeto String)
*/
