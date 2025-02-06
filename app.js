// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoInput = document.querySelector(".input-name").value
function agregarAmigo(){
    if(amigoInput == ""){
      //validar que el campo no esté vacío
      alert("Por favor, inserte un nombre.");
    } else{
        //agregar amigo a la lista
        amigos.push(amigoInput);
    }
    //limpiar input
    amigoInput = "";
}