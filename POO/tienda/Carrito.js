class Carrito {
  constructor(items) {
    this._items = items; //relacion con la las Clase CarritoItem.
  }

  get items() {
    return this._items;
  }

  agregarItem(item) {
    this._items.push(item);
  }

  calcularTotal() {
    return this._items.reduce((total, item) => total + item.subtotal, 0);
  }
}
