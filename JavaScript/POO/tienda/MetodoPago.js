class MetodoPago {
  constructor(nombre, tipo) {
    this._nombre = nombre; //visa, mastercard, efectivo
    this._tipo = tipo; //efectivo o tarjeta-relacion con la las Clase Efectivo y Tarjeta.
  }

  get nombre() {
    return this._nombre;
  }

  get tipo() {
    return this._tipo;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set tipo(nuevoTipo) {
    this._tipo = nuevoTipo;
  }
}

class Efectivo extends MetodoPago {
  constructor(nombre, tipo, monto) {
    super(nombre, tipo);
    this._monto = monto;
  }
}

class Tarjeta extends MetodoPago {
  constructor(nombre, tipo, numero, cvv, fechaVencimiento) {
    super(nombre, tipo);
    this._numero = numero;
    this._cvv = cvv;
    this._fechaVencimiento = fechaVencimiento;
  }
}
