function newNodePizza(newImg,newName,newIngred,newPrice){
    let image = newImg;
    let nombre = newName;
    let ingrediente = newIngred;
    let precio = newPrice;
    let nodoNuevo =
    `<div class = "pizza-item">
        <img src="${image}" alt="Imagen de pizza" class ="imagenPizza">
        <div class = "rectangulo">
          <div class = "infoPizza">
            <p class ="nombrePizza">${nombre}</p>
            <p class = "ingrediente">${ingrediente}</p>
          </div>
          <div class = "infoPrecio">
            <p class = "precio" ><span>$</span>${precio}</p>
            <button class = "item-pizza-button-add" >+</button>
          </div>
        </div>
      </div>`;
    return nodoNuevo;
}
function insertNodePizza(nodeInfo){
    let posicion = document.querySelector(".pizza-item-list");
    posicion.innerHTML = nodeInfo;
  }
function despliegaMenu(){
  let concatNodes = ``;
  let image;
  let nombre;
  let ingrediente;
  let precio;
  let sizeArr;
  let i = 0;
  sizeArr = arrayPizzas.length;
  for (i; i < sizeArr; i++ ){
    image = arrayPizzas[i].imgPizza;
    nombre = arrayPizzas[i].nomPizza;
    ingrediente = arrayPizzas[i].ingredientePpal;
    precio = arrayPizzas[i].precioPizza;
    concatNodes = concatNodes + newNodePizza(image,nombre,ingrediente,precio);
  }
  insertNodePizza(concatNodes);
}

function displayCarrito(){
  document.getElementById("paginaCarrito").style.display ="block";
  document.getElementById("paginaUno").style.display ="none";
}

function clearAll(){
  document.getElementById("paginaCarrito").style.display ="none";
  document.getElementById("paginaUno").style.display ="block";
}
despliegaMenu();