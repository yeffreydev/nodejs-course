//clase o modelo de objeto
class Persona {
  constructor(dni, nombre, apellidos, edad, ciudad) {
    this._dni = dni;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._ciudad = ciudad;
  }

  //getters (no tiene parametros, solo retornar el valor)

  get dni() {
    return this._dni;
  }
  get nombre() {
    return this._nombre;
  }
  get apellidos() {
    return this._apellidos;
  }

  get edad() {
    return this._edad;
  }

  get ciudad() {
    return this._ciudad;
  }

  //setters (recibe un parametro y modifica el valor, y no retorna nada)
  set dni(nuevoDNI) {
    this.validarDni(nuevoDNI);
    this._dni = nuevoDNI;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set apellidos(nuevoApellido) {
    this._apellidos = nuevoApellido;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }

  set ciudad(nuevaCiudad) {
    this._ciudad = nuevaCiudad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellidos} y tengo ${this.edad} años.`);
  }
  caminar() {
    console.log("Estoy caminando");
  }
  comer() {}
  validarDni(dni) {
    //logica para validar el dni
  }
}

//objeto
const persona1 = new Persona("12345678", "Pepe", "Perez", 30, "Lima");

///clase hijo
class Doctor extends Persona {
  constructor(dni, nombre, apellidos, edad, ciudad, especialidad, centroSalud) {
    super(dni, nombre, apellidos, edad, ciudad);
    this._especialidad = especialidad;
    this._centroSalud = centroSalud;
  }

  get especialidad() {
    return this._especialidad;
  }

  get centroSalud() {
    return this._centroSalud;
  }

  set especialidad(nuevaEspecialidad) {
    this._especialidad = nuevaEspecialidad;
  }

  set centroSalud(nuevoCentroSalud) {
    this._centroSalud = nuevoCentroSalud;
  }
}

const doctor1 = new Doctor("12345678", "Pepe", "Perez", 30, "Lima", "Medicina General");

class Cirujano extends Doctor {
  constructor(dni, nombre, apellidos, edad, ciudad, especialidad, centroSalud, hospital) {
    super(dni, nombre, apellidos, edad, ciudad, especialidad, centroSalud);
    this._hospital = hospital;
  }

  get hospital() {
    return this._hospital;
  }

  set hospital(nuevoHospital) {
    this._hospital = nuevoHospital;
  }
}

class Profesor extends Persona {
  constructor(dni, nombre, apellidos, edad, institucion) {
    super(dni, nombre, apellidos, edad);
    this._institucion = institucion;
  }

  get institucion() {
    return this._institucion;
  }

  set institucion(nuevaInstitucion) {
    this._institucion = nuevaInstitucion;
  }

  enseñar() {
    console.log("Estoy enseñando");
  }
}

//objeto Cirujano
const cirujano1 = new Cirujano("12345678", "Pepe", "Perez", 30, "Lima", "Medicina General", "Centro de Salud", "Hospital");

//objeto Profesor
const profesor1 = new Profesor("12345678", "Pepe", "Perez", 30, "Universidad Nacional de Ingenieria");

console.log(profesor1);
profesor1.enseñar();
