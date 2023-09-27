const data = {
  id: 0,
  usuarios: [],
  agregar: function (data) {
    const usuario = { ...data, id: this.id };
    this.usuarios.push(usuario);
    this.id++;
    return usuario;
  },
  findById: function (id) {
    return this.usuarios.find((usuario) => usuario.id == id);
  },
  actualizar: function (data) {
    let actualizado = false;
    this.usuarios = this.usuarios.map((usuario) => {
      if (usuario.id == data.id) {
        usuario = data;
        actualizado = true;
      }
      return usuario;
    });
    return actualizado;
  },
  eliminar: function (id) {
    this.usuarios = this.usuarios.filter((usuario) => usuario.id != id);
  },
};

module.exports = data;
