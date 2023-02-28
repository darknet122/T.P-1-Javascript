//Tarea -7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt('ingrese un numero'));
let num2 = parseInt(prompt('ingrese otro numero'));
let num3 = parseInt(prompt('ingrese otro numero'));

if (num1 > num2 && num1 > num3) {
    document.write("El mayor es el "+ num1);
} else if (num2 > num3) {
    document.write("El mayor es el "+ num2);
} else {
    document.write("El mayor es el "+ num3);
    }