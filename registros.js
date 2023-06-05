class Registro {
  constructor(matricula, nombre, apellido, fechaNacimiento) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = this.calcularEdad();
  }

  calcularEdad() {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(this.fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = fechaNacimiento.getMonth();

    if (mesNacimiento > mesActual || (mesNacimiento === mesActual && fechaNacimiento.getDate() > fechaActual.getDate())) {
      edad--;
    }

    return edad;
  }
}

// registros
const registros = [
  new Registro('157283', 'Juan', 'Perez Cantor', '2002-06-17'),
  new Registro('192833', 'Maria', 'Gomez Ramirez', '1985-10-30'),
  new Registro('109284', 'Carlos', 'Lopez Mora', '2000-02-28'),
  new Registro('120384', 'Ana', 'Rodriguez Jimon', '1998-12-05'),
  new Registro('172302', 'Luis', 'Martinez Arellano', '1999-07-20')
];

module.exports = registros;
