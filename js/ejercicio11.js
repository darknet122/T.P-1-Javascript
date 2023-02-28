//Tarea -11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let numero = parseInt(prompt("ingrese un numero"));

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
    document.write("Si es divisible por 2,3,5 y 7 el numero que elegiste");
if (numero % 2 === 0) {
    document.write(", es divisible por 2 especificamente");
    }
if (numero % 3 === 0) {
    document.write(", es divisible por 3 especificamente");
    }
if (numero % 5 === 0) {
    document.write(", es divisible por 5 especificamente");
    }
if (numero % 7 === 0) {
    document.write(", es divisible por 7 especificamente");
    }
} else {
    document.write("No es divisible por 2, por 3, por 5, nI por 7");
}