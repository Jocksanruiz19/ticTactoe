// Obtiene los elementos con la clase "contenedor"
const contenedor = document.getElementsByClassName("contenedor");
// Obtiene el elemento con el id "Reiniciar"
const Reiniciar = document.getElementById("Reiniciar");
// Obtiene el elemento con el id "mensaje"
const mensaje = document.getElementById("mensaje");

// Define las posibles combinaciones ganadoras en el juego de Tic Tac Toe
const Victoria = [
  [0, 4, 8], [2, 4, 6], [0, 6, 3],
  [1, 4, 7], [2, 5, 8], [0, 1, 2],
  [3, 4, 5], [6, 7, 8]
];

// Añade un evento de clic a cada elemento del contenedor
for (let index = 0; index < contenedor.length; index++) {
  contenedor[index].addEventListener("click", function () {
    // Si el contenedor ya tiene contenido, no hace nada
    if (contenedor[index].textContent !== "") return;

    // Asigna "X" al contenedor clicado
    contenedor[index].textContent = "X";
    // Verifica si hay un ganador
    cargaDeGanadores();

    // Encuentra los espacios libres en el tablero
    let espaciosLibres = [];
    for (let i = 0; i < contenedor.length; i++) {
      if (contenedor[i].textContent === "") {
        espaciosLibres.push(i);
      }
    }

    // Si hay espacios libres, asigna "O" a uno aleatorio
    if (espaciosLibres.length > 0) {
      let aleatorio = Math.floor(Math.random() * espaciosLibres.length);
      contenedor[espaciosLibres[aleatorio]].textContent = "O";
      // Verifica si hay un ganador
      cargaDeGanadores();
    }
  });
}

function cargaDeGanadores() {
  for (let i = 0; i < Victoria.length; i++) {
    const [a, b, c] = Victoria[i];

    // Verifica si hay una combinación ganadora
    if (
      contenedor[a].textContent &&
      contenedor[a].textContent === contenedor[b].textContent &&
      contenedor[a].textContent === contenedor[c].textContent
    ) {
      // Si hay una combinación ganadora, muestra el mensaje "Haz Ganado"
      mensaje.textContent= "Haz Ganado"; 
      return true; 
    }
  }
  return false;
}

// Añade un evento de clic al botón de reiniciar
Reiniciar.addEventListener("click", function () {
  // Limpia el contenido de todos los contenedores
  for (let index = 0; index < contenedor.length; index++) {
    contenedor[index].textContent = "";
  }
  // Limpia el mensaje
  mensaje.textContent = "";
  // Muestra una alerta de "Suerte"
  alert("Suerte");
});