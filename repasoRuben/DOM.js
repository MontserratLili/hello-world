function crearMenuBebidas(){

  var body = document.getElementsByTagName("body")[0];
  //crear Elements
  var nuevaLista = document.createElement("ol");
  var titulo = document.createElement("h4");
  var li_agua = document.createElement("li");
  var sopa = document.createElement("li");
  //Agregar atributos
  nuevaLista.id="ListaBebidas";
  //Modificar Textos
  titulo.innerHTML="Bebidas";
  li_agua.innerHTML="Agua";
  sopa.innerHTML="Sopa de Lima";
  //Agregar al arbol
  body.appendChild(titulo);
  body.appendChild(nuevaLista);
  nuevaLista.appendChild(li_agua);
  nuevaLista.appendChild(sopa);
}

function arreglarMenu(){
  var listBebidas = document.getElementById("ListaBebidas");
  console.log(listBebidas);
  var hijos_listaBebidas = listBebidas.childNode;
  console.log(hijos_listaBebidas);
  var nodo_sopa_lima = hijos_listaBebidas[1];
  console.log(nodo_sopa_lima);

  listBebidas.removeChild(nodo_sopa_lima);
  var listaComida = document.getElementById("listaPlato");
  listaComida.appendChild(nodo_sopa_lima);

  console.log(listBebidas);
}

crearMenuBebidas();
arreglarMenu();
