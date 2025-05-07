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


//metodos de arreglos
//lenght -> longitud del arreglo



const longitud = miArreglo.length;
console.log(longitud)

//push(valor) -> Agrega un elemento al final
//equivalente al append de python 
miArreglo.push("Nicolas");
console.log("cadena", miArreglo);

//pop() eliamina el ultimo elemento de un arreglo 
//si queremos lo podemos guardar en una variable

const ultimos = miArreglo.pop();
console.log("ultimos", ultimos)


//shift() elimina el primer valor de un arreglo,
//tambien lo guarda

const primero = miArreglo.shift();
console.log(primero)

//unshift(valor) Agrega un elemneto al principio del arreglo
miArreglo.unshift("lian")
console.log(miArreglo)

//forEach 
//SOLO RECCORE, no guarda los valores en ningun lado, 
//importa el orden de las variables
miArreglo.forEach( (item, index, miArregloEntero) => {
console.log(
    "elemento",
    item,
    "index",
    index,
);
})


//map recorre el miArreglo, lo modifica con una funcion 
// y nos devulve uno nuevo

const nuevoArreglo = miArreglo.map((item, index) => {
   const num = 2
   return(item += num); 

})
console.log("nuevo miArreglo", nuevoArreglo)

//filter  crea un nuevo array apartir de los elemenots que cumplan
//la condicion

const arregloNum = [2,4,5,6]
const nuevoArreglonum = arregloNum.filter((item) => item % 2 === 0);
console.log("los numero pares son", nuevoArreglonum )







