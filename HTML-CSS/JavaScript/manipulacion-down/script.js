// Manipulacion del DOM
//Nos permite interactuar con un documenot, modificar su estructura
//modificar su estructura
//estilo y contenido


//Seleccionar elemento del DOM
//por ID


//Obtenineod el ID de la etiqueta
//nos permiete acceder a todas sus propiedades
let titulo = document.getElementById('titulo');
console.log( titulo.textContent, titulo.innerText);
console.log(titulo);

titulo.textContent = 'este es el nuevo titulo';

//Evento(addEventListener, onClick, onChange)

let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
    alert('Este boton ha sido clikeado')
})


// sirve para agregar elementos

let container = document.getElementById("container");
const parrafo = document.createElement("p");
parrafo.textContent = "Este es el parrafo creado";
container.append(parrafo)
