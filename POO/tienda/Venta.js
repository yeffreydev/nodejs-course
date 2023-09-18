class Venta {
  constructor(cliente, impuestos, items) {
    this._fecha = new Date();
    this._cliente = cliente; //relacion con la las Clase Cliente.
    this._impuestos = impuestos; //porcentaje de impuestos del total de la venta.
    this._items = items; //relacion con la las Clase CarritoItem.
  }
  get cliente() {
    return this._cliente;
  }

  get impuestos() {
    return this._impuestos;
  }
  get items() {
    return this._items;
  }
  set cliente(nuevoCliente) {
    this._cliente = nuevoCliente;
  }

  set impuestos(nuevoImpuestos) {
    this._impuestos = nuevoImpuestos;
  }
  set items(nuevoItems) {
    this._items = nuevoItems;
  }

  calcularImpuestos() {
    return this._items.reduce((total, item) => total + item.subtotal, 0) * this._impuestos;
  }
}
