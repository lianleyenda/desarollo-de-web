
let boton = document.getElementById("boton");
const recibe = document.getElementById("contenedor");
const li = document.createElement("li");


const eliminar = boton.addEventListener('click', function(){
    
    
    let datos = document.getElementById("in").value;

   
        const li = document.createElement("li");
        const check = document.createElement("input");
        check.type = "checkbox";
        li.textContent = datos;
        
        li.append(check)
        recibe.appendChild(li);
      
        console.log(check.value,check)
  check.addEventListener('change', function(){
       if(check.checked){
          li.remove();
       }
    
      })
       

        document.getElementById("in").value = "";  // Limpia el input
})

