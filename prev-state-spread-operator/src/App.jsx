
import { useState } from 'react'
import './App.css'

function App() {
  const [num,setNum] = useState([1,2,3])//contiene culaquier cosa el estado
  const [persona, setPersona] = useState({nombre: "Pepito", edad: "19"})
  const numero = num[num.length -1]//toma el ultimo numero

//spread operator
function myFunction(){
setNum([...num, numero +1])
}
  //tarea hacer que el setNUm agregue numeros consecutivos -> 3 puntos

  //agregar una propiedad al objeto persona usando spread operator -> 4 puntos
  //y que al hacer click en un boton dispare la funcion y la muestre por consola

  function person(){
    const apellido = {
      ...persona,
      apellido : "Leyenda"
    }
    console.log(apellido)
    
  
  }


  //opcional 3 puntos
  //Partiendo de {nombre : "pepito", edad : "19"}, cambial solo el nombre de luis usando spread operator

  function cambiar(){
     const cambiar = {
      ...persona,
      nombre : "luis"
    }
    console.log(cambiar)
  }


  return (
    <>
    
     <div>
      {num.map((item, index) => (
        <p>{item}</p>
      ))}
      <button onClick={myFunction}>Agregar numero</button> {/*cuando clickea hace el codigo de my fuction */}
      <button onClick={person}>Tocame</button>
      <button onClick={cambiar}>te cambio</button>
     </div>

    </>
  )
}

export default App
