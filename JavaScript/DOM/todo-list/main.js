//variables de html
let formTarea = document.getElementById("formulario-tarea");
let tareaInput = document.getElementById("tarea-input");
let listaTareas = document.querySelector(".lista-tareas");

//variables de estado
let tareas = [];

function crearTarea({ id, texto, completada }) {
  let indice = id.substring(6);

  let cont = document.createElement("div");
  cont.setAttribute("id", id);
  cont.setAttribute("class", "tarea");

  //input para ver si la tarea esta completada
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  //agregar evento para cambiar el estado de si la tarea esta completada
  input.addEventListener("change", (e) => {
    e.preventDefault();
    let tareasActualizadas = tareas.map((tarea, i) => {
      if (i == indice) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    tareas = tareasActualizadas;
    mostrarTareas();
  });

  if (completada) {
    input.setAttribute("checked", "");
  }
  cont.appendChild(input);

  //span para el texto
  let span = document.createElement("span");
  let txtNodo = document.createTextNode(texto);
  span.appendChild(txtNodo);
  cont.appendChild(span);

  //div
  let contBtn = document.createElement("div");
  contBtn.className = "cont-btn";
  let btn = document.createElement("button");
  btn.className = "eliminar";
  btn.innerText = "eliminar";
  btn.addEventListener("click", function () {
    eliminarTarea(indice);
  });

  contBtn.appendChild(btn);
  cont.appendChild(contBtn);

  return cont;
}

function eliminarTarea(indice) {
  console.log(indice);
  let nuevasTareas = tareas.filter((tarea, i) => {
    return i != indice;
  });
  console.log(nuevasTareas);
  tareas = nuevasTareas;
  mostrarTareas();
}

function mostrarTareas() {
  //limpiar tareas del html
  listaTareas.innerHTML = "";
  tareas.forEach(function (tarea, i) {
    let id = `tarea-${i}`;
    const nuevaTarea = {
      id,
      texto: tarea.texto,
      completada: tarea.completada,
    };

    const nodoTarea = crearTarea(nuevaTarea);
    listaTareas.appendChild(nodoTarea);
  });
}

//agregar tarea
formTarea.addEventListener("submit", function (e) {
  e.preventDefault();
  let tareaTexto = tareaInput.value;

  if (!tareaTexto.trim()) {
    alert("la tarea no debe estar vacia");
    return;
  }

  tareas.push({ texto: tareaTexto, completada: false });
  mostrarTareas();
  tareaInput.value = "";
});
