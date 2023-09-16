const btnAddUser = document.querySelector(".add-user");
const contForm = document.querySelector(".cont-form");
const cerrarForm = document.querySelector(".btn-cerrar-form");
const btnSubmitUser = document.querySelector(".btn-submit-user");
const dataUser = document.querySelector(".data-user");
const formUser = document.getElementById("formulario_usuario");
const nombresInput = document.getElementById("nombres");
const apellidosInput = document.getElementById("apellidos");
const dniInput = document.getElementById("dni");

let usuarios = [];
let dniEditar = "";

btnAddUser.addEventListener("click", (e) => {
  dniEditar = "";
  mostrarFormulario();
});

cerrarForm.addEventListener("click", function (e) {
  e.preventDefault();
  cerrarFormulario();
});

function mostrarFormulario() {
  if (dniEditar) {
    console.log("editar usuario");
    const usuarioEditar = usuarios.find((usuario) => usuario.dni == dniEditar);
    dniInput.value = usuarioEditar.dni;
    apellidosInput.value = usuarioEditar.apellidos;
    nombresInput.value = usuarioEditar.nombres;
  } else {
    limpiarCampos();
  }
  contForm.style.display = "flex";
  console.log("se ejecuta");
}

function cerrarFormulario() {
  contForm.style.display = "none";
}

formUser.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombres = nombresInput.value;
  const apellidos = apellidosInput.value;
  const dni = dniInput.value;
  const usuario = {
    nombres,
    apellidos,
    dni,
  };
  if (dniEditar) {
    //logica para editar un usuario
    const nuevosUsuarios = usuarios.map((usuario, indice) => {
      if (usuario.dni == dniEditar) {
        usuario.nombres = nombresInput.value;
        usuario.apellidos = apellidosInput.value;
        usuario.dni = dniInput.value;
      }
      return usuario;
    });
    usuarios = nuevosUsuarios;
    //mostrar todos los usuarios
    mostrarUsuarios();
  } else {
    //logica para crear un nuevo usuario
    usuarios.push(usuario);
    const fila = crearFilaUsuario(usuario);
    dataUser.appendChild(fila);
  }
  limpiarCampos();
  cerrarFormulario();
});

function crearBtnEditar(dni) {
  const btn = document.createElement("button");
  btn.textContent = "Editar";
  btn.className = "btn-editar-usuario";
  btn.setAttribute("data-dni", dni);
  btn.addEventListener("click", (e) => {
    dniEditar = btn.getAttribute("data-dni");
    mostrarFormulario();
  });
  return btn;
}

//componente fila de usuario
const crearFilaUsuario = (usuario) => {
  const { nombres, apellidos, dni } = usuario;
  const fila = document.createElement("tr");
  fila.setAttribute("id", dni);
  const nombresCelda = document.createElement("td");
  nombresCelda.innerText = nombres;
  const apellidosCelda = document.createElement("td");
  apellidosCelda.innerText = apellidos;
  const dniCelda = document.createElement("td");
  dniCelda.innerText = dni;
  const accionesCol = document.createElement("td");
  accionesCol.appendChild(crearBtnEditar(dni));
  accionesCol.appendChild(crearBtnEliminar());
  fila.appendChild(nombresCelda);
  fila.appendChild(apellidosCelda);
  fila.appendChild(dniCelda);
  fila.appendChild(accionesCol);
  return fila;
};

function crearBtnEliminar() {
  const btnEliminar = document.createElement("button");
  btnEliminar.innerText = "Eliminar";
  btnEliminar.classList.add("eliminar-usuario");
  return btnEliminar;
}

const mostrarUsuarios = () => {
  dataUser.innerHTML = "";
  usuarios.forEach((user) => {
    let fila = crearFilaUsuario(user);
    dataUser.appendChild(fila);
  });
};

//funciones
function limpiarCampos() {
  nombresInput.value = "";
  apellidosInput.value = "";
  dniInput.value = "";
}
