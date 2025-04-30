/*Actividad 1*/
const numero = 8

if (numero === 0){
    console.log(0)

}

if (numero > 0){
    console.log(true)
}

if (numero < 0){
    console.log(false)
}


/*Activada 2*/
 const lista = [1,2,3,4,5,6,7,8,9,10,]
 //La vas a usar para acumular (sumar) los números pares más adelante.
//Usás let porque sí va a cambiar con cada número par que se sume.
let suma = 0;

 for(let i=0; i < lista.length; i++){//let i=0 => empezamos desde el primer índice del array.
    //i < lista.length =>  recorremos todo el array i++ =>  recorremos todo el array.
    if (lista[i] %2 === 0){
    //Si el número es par, lo sumás a la variable suma.
    //Es lo mismo que escribir: suma += lista[i];
        suma = suma + lista[i]
    }
 }
 console.log(`la suma de todos los numero pares es ${suma}`)


 /*Actividad 3*/

 const lista1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let suma3 = 0

 for(let i=0; i < lista1.length; i++){//let i=0 => empezamos desde el primer índice del array.
    //i < lista.length =>  recorremos todo el array i++ =>  recorremos todo el array.
    if (lista1[i] %3 === 0 && lista1[i] %5 !== 0){
        suma3 = suma3 + lista1[i]
    }
 }
 console.log(`la suma de todos los numeros multiplo de 3 es ${suma3}`)


 