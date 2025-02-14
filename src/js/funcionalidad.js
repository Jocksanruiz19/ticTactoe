const contenedor = document.getElementsByClassName("contenedor");
const Reiniciar = document.getElementsByClassName("Reiniciar")[0];

for (let index = 0; index < contenedor.length; index++) {
  contenedor[index].addEventListener("click", function () {
    if (contenedor[index].textContent !== "") {
      return;
    }

    contenedor[index].textContent = "X";

    let espaciosLibres = [];
    for (let i = 0; i < contenedor.length; i++) {
      if (contenedor[i].textContent === "") {
        espaciosLibres.push(i);
      }
    }

    if (espaciosLibres.length > 0) {
      let aleatorio = Math.floor(Math.random() * espaciosLibres.length);
      contenedor[espaciosLibres[aleatorio]].textContent = "O";
    }
  });
}

Reiniciar.addEventListener("click", function () {
  for (let index = 0; index < contenedor.length; index++) {
    contenedor[index].textContent = "";
  }
});
