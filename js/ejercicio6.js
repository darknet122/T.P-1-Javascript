//Tarea -6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt('ponga un numero aqui'));
let num2 = parseInt(prompt('ponga otro numero aqui'));

if (num1 > num2){
    document.write("El mayor es "+ num1);
}else {
    document.write("El mayor es "+ num2);
}