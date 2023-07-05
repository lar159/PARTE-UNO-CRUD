




let agregar = document.getElementById("agregar");
let formulario = document.getElementById("formulario");
let tarea = document.getElementById("tarea");


console.log(agregar)
console.log(formulario)
console.log(tarea)
console.clear()

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("ninja")
   agregarTarea(formularioValido())

})

function formularioValido() {
    let mensaje = document.getElementById("mensaje");
    let texto = ""
    if (tarea.value.trim() === "") {
        texto = "Error";
    }
   mensaje.innerHTML = texto
   return (texto=="Error")? false : true
}

function agregarTarea(valido) {
    if(valido){
        console.log("enviando");
        let listaTarea = document.getElementById("listaTarea")
        listaTarea.innerHTML += ` 
        <tr>
            <th scope="col">${tarea.value}</th>
              <th class="text-center">
                <button type="button" class="btn btn-primary my-1">Borrar</button>
                <button type="button" class="btn btn-warning my-1">Editar</button>
            </th>
        </tr>
        `
        console.log(listaTarea)
        tarea.value = "";
    }
}