class Producto {
  constructor(codigo, nombre, precio, stock) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._precio = precio;
    this._stock = stock;
    this.generarCodigo();
  }

  //create all getters
  get codigo() {
    return this._codigo;
  }

  get nombre() {
    return this._nombre;
  }

  get precio() {
    return this._precio;
  }

  get stock() {
    return this._stock;
  }

  //create all setters
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  }

  set stock(nuevoStock) {
    this._stock = nuevoStock;
  }

  generarCodigo() {
    //logica para generar codigo
    this._codigo = "PROD" + Math.floor(Math.random() * 1000);
  }
}
