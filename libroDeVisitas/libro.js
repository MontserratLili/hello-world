//mostrar el comentario en pantalla al mismo tiempo que se escribe en el área de texto
function comentar(){
  var comentario = document.getElementById("cajaDeTexto").value;
  document.getElementById("mostrar").value = comentario;
}

//tamaño del texto mostrado en pantalla
function grande(){
  document.getElementById("grande");
  document.getElementById("mostrar").style.fontSize = 40 + "pt";
}
function mediano(){
  document.getElementById("mediano");
  document.getElementById("mostrar").style.fontSize = 30 + "pt";
}
function chico(){
  document.getElementById("chico");
  document.getElementById("mostrar").style.fontSize = 15 + "pt";
}

//color del texto mostrado en pantalla y fondo del mismo
function colorLetra(){
  document.getElementById("color");
  var colorLe = prompt("Ingresa el color en Hexádecimal");
  document.getElementById("alineacion").style.color = colorLe;
}
function colorFondo(){
  document.getElementById("fondo");
  var ingresa = prompt("Ingresa el color en Hexádecimal");
  document.getElementById("alineacion").style.backgroundColor = ingresa;
}

//alineación del texto mostrado en pantalla
function centrar(){
  document.getElementById("centrar");
  document.getElementById("alineacion").style.textAlign = "center";
}
function derecha(){
  document.getElementById("derecha");
  document.getElementById("alineacion").style.textAlign = "right";   
}
function izquierda(){
  document.getElementById("izquierda");
  document.getElementById("alineacion").style.textAlign = "left";   
}

function enviar(){
  var comentario = document.getElementById("mostrar").value;
  document.getElementById("enviado").innerHTML= comentario;
  //una variable que almacene todo lo que hice
}