var contador = 1;

function agregarTarea(event){
  event.preventDefault();

  var articulo = document.createElement("article");
  var entrada = document.createElement("input");
  var etiqueta = document.createElement("label");
  var boton = document.createElement("button");

  var id = "check" + contador;

  articulo.setAttribute="ok";

  entrada.type = "checkbox";
  entrada.id = id;
  entrada.onclick=function(){
    var checked = this.checked;
    var texto = this.nextSibling;

    if(checked){
      texto.style.textDecoration = "line-through";
    }
    else{
      texto.style.textDecoration = null;
    }
  }

  etiqueta.setAttribute("for", id);
  etiqueta.innerText= (document.getElementById("mensaje").value);

  boton.type = "button";
  boton.innerText = "Eliminar";
  boton.onclick = function(){
    var articulo = this.parentElement;
    articulo.remove();
  }

  articulo.appendChild(entrada);
  articulo.appendChild(etiqueta);
  articulo.appendChild(boton);

  document.getElementById("tareas").appendChild(articulo);

  contador++;
}
