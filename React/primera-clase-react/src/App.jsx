import './App.css'
import { useEffect, useState } from 'react';
import './components/RickyMorty/RickyMorty'

function App() {

  const[nombre, setNombre] = useState("");
  
  const handleClick = () =>{
    console.log(nombre)

  };

  const handleInputChange = (eventoFinaldeFornite) => {
     setNombre(eventoFinaldeFornite.target.value);
  };
  
  
  return (
    <>

    <input 
    type="text" 
    placeholder='Escribi tu nombre' 
    onChange={handleInputChange}
    value={nombre}
    />
    
    { <button onClick={handleClick}>Mostrar</button> /*va sin parentisis siemopre porqu esi no rompe ya que con los parentisis se activa en el momemnto */}
     {nombre && 
     <h2>{nombre}</h2>}
    </>
  )
}

export default App
