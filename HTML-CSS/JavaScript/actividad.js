const inventario = []
inventario.push({producto: "Auriculares",precio: 2000, categoria: "Electronica"}, 
                {producto: "remeras",precio: 6000, categoria: "indumentaria"},
                {producto: "fideos",precio: 1000, categoria: "comida"},
                {producto: "Mario bros",precio: 8000, categoria: "juegos"}
)
console.log(inventario)
inventario.forEach((item, index, todo) => {
  console.log(todo)
} )

const buscar = inventario.filter((item) => item.categoria === "Electronica");
console.log(buscar)

const productos = inventario.map((item)  => {
    return item.producto
})

console.log(productos)




const Peliculas = []

Peliculas.push({titulo: "tonto y retonto",director: "Cristian Costa", ano:2016 , genero: "Comedia"}, 
    {titulo: "El Elegido",director: "Leonel Kessi", ano: 2000, genero: "Deporte"},
    {titulo: "El Chef",director: "Robert Deniro", ano: 2008, genero:"suspenso"},)
console.log("agregue datos al array",Peliculas)    

const nuevaPelicula = {titulo: "el regreso del calzon usado"}
Peliculas.unshift(nuevaPelicula);
console.log("agregue una pelicula al inicio",Peliculas)

const BorrarPelicula = Peliculas.shift();
console.log("borro la primera pelicula", BorrarPelicula)

