const dataUsersTable = document.querySelector(".data-users");
let idEditar = null;

//trabar fomulario
const inputUsuario = document.getElementById("username");
const inputEmail = document.getElementById("email");
const btnSave = document.getElementById("save");
const form = document.querySelector("form");

const BtnEditar = (user) => {
  const btnEditar = document.createElement("button");
  btnEditar.className = "btn-editar-user";
  btnEditar.innerHTML = "Editar";
  btnEditar.addEventListener("click", function () {
    if (typeof user.id == "number") {
      idEditar = user.id.toString();
    }
    console.log(idEditar);
    inputUsuario.value = user.username;
    inputEmail.value = user.email;
    btnSave.innerHTML = "Actualizar";
  });
  return btnEditar;
};
const BtnEliminar = (id) => {
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn-eliminar-user";
  btnEliminar.innerHTML = "Eliminar";
  btnEliminar.addEventListener("click", () => {
    eliminarUsuario(id);
  });
  return btnEliminar;
};
const FilaUsuario = (user) => {
  let tr = document.createElement("tr");
  tr.className = "fila-user";
  const keysUser = Object.keys(user);
  keysUser.forEach((key) => {
    let td = document.createElement("td");
    td.classList.add("celda-user");
    td.innerHTML = user[key];
    tr.appendChild(td);
  });
  const celdaAcciones = document.createElement("td");
  celdaAcciones.classList.add("celda-user-acciones");
  const btnEditar = BtnEditar(user);
  const btnEliminar = BtnEliminar(user.id);
  celdaAcciones.appendChild(btnEditar);
  celdaAcciones.appendChild(btnEliminar);
  tr.appendChild(celdaAcciones);
  return tr;
};
async function obtenerUsuarios() {
  dataUsersTable.innerHTML = "";
  const res = await fetch("/api/users");
  const data = await res.json();
  if (!data) return;
  if (data instanceof Array) {
    data.forEach((user) => {
      dataUsersTable.appendChild(FilaUsuario(user));
    });
  }
}

obtenerUsuarios();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  postUser();
});

const limpiarInputs = () => {
  inputUsuario.value = "";
  inputEmail.value = "";
};
const postUser = () => {
  const user = {
    username: inputUsuario.value,
    email: inputEmail.value,
  };

  if (idEditar) {
    console.log("editando");
    fetch("/api/users/", { method: "PUT", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...user, id: idEditar }) }).then((res) => {
      if (res.status == 200) {
        obtenerUsuarios();
        limpiarInputs();
        btnSave.innerHTML = "Save";
        idEditar = null;
      }
    });
  } else {
    fetch("/api/users", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(user) }).then((res) => {
      if (res.status == 200) {
        obtenerUsuarios();
        limpiarInputs();
      }
    });
  }
};

const eliminarUsuario = (id) => {
  fetch("/api/users/" + id, { method: "DELETE" }).then((res) => {
    if (res.status == 200) {
      alert("usuario eliminado con exito");
      obtenerUsuarios();
    }
  });
};
