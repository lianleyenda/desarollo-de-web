//setTimeout
//es una funcion que recib epor parametro 2 valores

//recibe una funcion 
//tambien recibe el tiempo que va a tardar en ejecutarse

const button = document.getElementById("boton")
let contador = 0;
button.addEventListener("click", () => {

  setTimeout(function() {
  alert("hola fui clikeado");
   },2000) 
   
})


//steInterval()
//ejecuta el codigo cada x catidad de tiempo

/*setInterval(() => {
    contador++;
    console.log(contador);
    
}, 1000);
*/



//sincornia 
//peticion a una api 
//metodos get, post, put, delete


//fetch permite hacer solicitudes HTTP
fetch('https://rickandmortyapi.com/api/character')
   .then((data) => data.json())
   .then((Response) => console.log("response", Response));

   //   .then((Response) => console.log("response", Response.results[2]));
   //asi accedemos a un objeto con el results y el dato


  
//async await
// funcion flecha asincrona
//await es para decirle que espere 
const asyncFunction = async () => {
      //try intenta esto
      try{
         const response = await fetch("https://rickandmortyapi.com/api/character/?page=19");
         const data = await response.json();
         console.log("data", data);
        }
        //si no funciona viene al catch
      catch(error){
      console.log("error", error);
      }
};

asyncFunction()

// funcion regular asincorna
async function asyncFunc() {
    
}