//++++++++++Ringo++++++++++
var idTableBeatles = document.getElementById("tablaBeatles");
var idRingo = document.getElementById("idRingo");
var botonRingo = document.getElementById("botonRingo");

idTableBeatles.addEventListener("click", bienvenidaATabla);
idRingo.addEventListener("click", felicitarRingo, true);
botonRingo.addEventListener("click", saludarRingo);

function bienvenidaATabla(){
  event.stopPropagation();
  alert("Hola bienvenido a la tabla de Beatles");
}
function felicitarRingo(){
  event.stopPropagation();
  alert("Felicidades Ringo");
}
function saludarRingo(){
  event.stopPropagation();
  alert("Hola soy Ringo Star y mi cumpleaños es el 10/11/53");
}
//++++++++++George++++++++++
var idGeorge = document.getElementById("idGeorge");
var botonGeorge = document.getElementById("botonGeorge");

idGeorge.addEventListener("click", felicitarGeorge, true);
botonGeorge.addEventListener("click", saludarGeorge);

function felicitarGeorge(){
  event.stopPropagation();
  alert("Felicidades George");
}
function saludarGeorge(){
  event.stopPropagation();
  alert("Hola soy George Harrison y mi cumpleaños es el 10/11/53");
}

//++++++++++Paul++++++++++
var idPaul = document.getElementById("idPaul");
var botonPaul = document.getElementById("botonPaul");

idPaul.addEventListener("click", felicitarPaul, true);
botonPaul.addEventListener("click", saludarPaul);

function felicitarPaul(){
  event.stopPropagation();
  alert("Felicidades Paul");
}
function saludarPaul(){
  event.stopPropagation();
  alert("Hola soy Paul McALgo y mi cumpleaños es el 10/11/53");
}

//++++++++++John++++++++++
var idJohn = document.getElementById("idJohn");
var botonJohn = document.getElementById("botonJohn");

idJohn.addEventListener("click", felicitarJohn, true);
botonJohn.addEventListener("click", saludarJohn);

function felicitarJohn(){
  event.stopPropagation();
  alert("Felicidades John");
}
function saludarJohn(){
  event.stopPropagation();
  alert("Hola soy John Lennon y mi cumpleaños es el 10/11/53");
}
