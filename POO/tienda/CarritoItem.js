class CarritoItem {
  constructor(producto, cantidad) {
    this._producto = producto; //relacion con la las Clase Producto.
    this._cantidad = cantidad;
  }

  get producto() {
    return this._producto;
  }
  set producto(nuevoProducto) {
    this._producto = nuevoProducto;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(nuevaCantidad) {
    this._cantidad = nuevaCantidad;
  }

  incrementarCantidad() {
    this._cantidad = this._cantidad++;
  }
  decrementarCantidad() {
    this._cantidad = this._cantidad--;
  }

  get subtotal() {
    return this.producto.precio * this.cantidad;
  }
}
