class Vehiculo {
  constructor(marca, modelo, precio) {
    this._marca = marca;
    this._modelo = modelo;
    this._precio = precio;
  }
  //getters
  get marca() {
    return this._marca;
  }

  get modelo() {
    return this._modelo;
  }

  get precio() {
    return this._precio;
  }

  //setters

  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  }

  set modelo(nuevoModelo) {
    this._modelo = nuevoModelo;
  }

  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  }

  //acelerar
  acelerar() {
    console.log("empezando a acelerar");
  }
}

class VehiculoTerrestre extends Vehiculo {
  constructor(marca, modelo, precio) {
    super(marca, modelo, precio);
  }
  acelerar() {
    console.log("acelarando a una velocida maxima de 100km/h y consumo gasolina");
  }
}

class VehiculoAereo extends Vehiculo {
  constructor(marca, modelo, precio) {
    super(marca, modelo, precio);
  }
  acelerar() {
    console.log("acelerado por un piloto aereo ceriticado y profesional");
  }
}

class VehiculoAcuatico extends Vehiculo {
  constructor(marca, modelo, precio) {
    super(marca, modelo, precio);
  }
  acelerar() {
    console.log("soy un barco, y funciono con carbon para poder acelerar ");
  }
}
