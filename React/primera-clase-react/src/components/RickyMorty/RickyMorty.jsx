import { useState, useEffect}  from "react"



export function RickMorty(){
const [character, setCharacter] = useState([])
  //useEffect va a ejutar le codiogo que se necuntra adentro,
//tantas veces como se actualicen sus dependencias
//si no hay depencdencias se ejecuta solo antes del primer
//renderizado
useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then((response) => setCharacter(response.results))

  }, []);


    return (
    <>
    {character ? (
      character.map((item, index) => <p>{item.name}</p>)
    ): <>cargando...</>}
    


  
    </>
  )
}