class Tienda {
  constructor(nombre, productos, clientes, ventas) {
    this._nombre = nombre;
    this._productos = productos; //relacion con la las Clase Producto.
    this._clientes = clientes; //relacion con la las Clase Cliente.
    this._ventas = ventas; //relacion con la las Clase Venta.
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get productos() {
    return this._productos;
  }

  get clientes() {
    return this._clientes;
  }

  get ventas() {}

  agregarProducto(producto) {
    this._productos.push(producto);
  }

  eliminarProducto(codigo) {
    this._productos = this._productos.filter((producto) => producto.codigo !== codigo);
  }

  buscarProducto(codigo) {
    return this._productos.find((producto) => producto.codigo === codigo);
  }

  listarProductos() {
    return this.productos;
  }
}
