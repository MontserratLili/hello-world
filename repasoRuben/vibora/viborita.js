var table = document.getElementById("");
size=20;
function crearTabla(){
for(var i=0; i<size; i++){
  var row = table.insertRow(i);
  for(var j = 0; j<size; j++){
    cell = row.insertCell(0);
    cell.innerHTML = "x";
  }
}
}

snake={
  pos = {
    [1,0],
    [0,0]
  }
  size=2,
  mover = function(aDonde){

  },
  comer = function(comida){

  }
}

crearTabla(20);
init();

document.addEventListener("keydown");

function init(){
  crearTabla(20);
  var inicio_x=snake.x;
  var inicio_y=snake.y;
  table.rows[inicio_x].cells[inicio_y].innerHTML=">";
}


function presionarTecla(tecla){

}
