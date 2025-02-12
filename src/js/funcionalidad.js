const contenedor = document.getElementsByClassName("contenedor")
const Reiniciar = document.getElementsByClassName("Reiniciar")



for (let index = 0; index < contenedor.length; index++) {
   
   contenedor[index].addEventListener("click", function(){
    contenedor[index].textContent = "X";
  })
  
}
let marcador = [""]


