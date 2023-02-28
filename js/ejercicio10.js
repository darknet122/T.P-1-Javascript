//Tarea -10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero = parseInt(prompt("ingrese un numero"));

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
    document.write("Si es divisible por 2,3,5 y 7 el numero que elegiste");
}else{
    document.write("No es divisible por 2, por 3, por 5, ni por 7");

}

