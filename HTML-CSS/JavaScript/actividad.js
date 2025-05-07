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

