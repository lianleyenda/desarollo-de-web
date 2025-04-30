var miVariable= 'contenido de la varibale';//no se usa
let miVariable2='pueden ser re-escritos sus valores';// let -> solamente vive en el scope declarado o en sus hijos
miVariable2 = 9//reasigno el valor
//variables constantes no son reasignables los valores
const miVariable3 = 10;


/*tipo de datos*/
const text = 'string'
const numeros = 2//number
const booleanos = true//boolean
//undefined -> valor no definido
//null -> vacio

//operadores 

//aritmeticos: son todos los de matematicas + - / % * 
//comparacion:
//== doble igual compara el valor del dato
//=== triple igual compara el valor y el tipo de dato
// != distinto el valor !== distinto valor y el tipo 
// > < >= <= mayor menor, mayor igula, menor igual


//condionales
//if


const edad = 20
if(edad > 18){
    console.log('sos mayor de edad');//mostrar por consola
    //es el print de python
}
else{
    console.log('sos menor de edad');
}


//Switch
const dia = 1
switch(dia){
    case 1: console.log('dia lunes'); break
    case 2: console.log('dia martes'); break
    default: console.log('dia no registrado'); break
}


//funciones
//declaracion de funcio clasicas
function saludar(nombre){
   return `hola ${nombre}`
}
console.log(saludar('Fede'));

//arrow funcion
//return explicito
const saludarExplicito = (nombre) => {
    return `hola ${nombre}`
}
//return inexplicito
const saludo = () =>`hola ${nombre}`;//return implicito
//si el return implicito tiene mas de una linea va a estar
// envuelto en parentesis

//arreglo o arrays (lista en python)
const miArreglo = [1, 2, "pepito", true]
console.log(miArreglo[2]);

//objeto se abre con llaves y un =
const miObjeto = {
 clave: 'valor',
 nombre: "lian",
 edad: 29,
}
console.log(miObjeto.clave);
 

//iteramos una lista con for
for(let i=0; i < miArreglo.length; i++){
    console.log(miArreglo[i])//imprime el la pantalla el arreglo con su posicion
}

