class Cliente {
  constructor(nombre, apellidos, ciudad, direccion, email, tel) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._ciudad = ciudad;
    this._direccion = direccion;
    this._email = email;
    this._tel = tel;
  }

  get nombre() {
    return this._nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  get ciudad() {
    return this._ciudad;
  }

  get direccion() {
    return this._direccion;
  }

  get email() {
    return this._email;
  }

  get tel() {
    return this._tel;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set apellidos(nuevoApellidos) {
    this._apellidos = nuevoApellidos;
  }

  set ciudad(nuevaCiudad) {
    this._ciudad = nuevaCiudad;
  }

  set direccion(nuevaDireccion) {
    this._direccion = nuevaDireccion;
  }

  set email(nuevoEmail) {
    //validar email
    this._email = nuevoEmail;
  }
  set tel(nuevoTel) {
    //validar telefono
    this._tel = nuevoTel;
  }
}
