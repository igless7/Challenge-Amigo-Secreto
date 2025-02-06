// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");
function agregarAmigo(){
    let amigoInput = document.querySelector(".input-name").value;
  if (amigoInput == "") {
    //validar que el campo no esté vacío
    alert("Por favor, inserte un nombre.");
  } else {
    //agregar amigo a la lista
    amigos.push(amigoInput);
    actualizarListaAmigos();
  }
  // Limpiar el input
  document.querySelector(".input-name").value = "";
  console.log(amigos);
}

function actualizarListaAmigos(){
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}