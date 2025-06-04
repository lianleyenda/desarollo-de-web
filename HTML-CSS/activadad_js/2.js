//hardcore es guardar en una varible

const user = "lian";
const pass = "1234";

const boton = document.getElementById("boton");


async function obtenerEmpleados() {
    const lista = document.getElementById("ul")
    const li = document.createElement("li")
    let response =  await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json();
    

   data.forEach(act => {
   li.textContent = `Nombre: ${act.Nombre} | Email: ${act.Email} | Empresa: ${act.Empresa}`;
   lista.append(li);
   console.log(act);
});
};

boton.addEventListener("click", function () {
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;

  if (usuario === user && contraseña === pass) {
    console.log("iniciaste sesion");
    sessionStorage.setItem("Usuario", usuario );
    sessionStorage.setItem("Contraseña", contraseña);
    console.log(sessionStorage.getItem("Usuario"));
    console.log(sessionStorage.getItem("Contraseña"));
    obtenerEmpleados();
    
  } else {
    console.log("usuario o contraseña incorrectos");
  }
});







