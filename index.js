const registros = require('./registros.js');

// Mostrar los registros
registros.forEach(registro => {
  console.log('Matrícula:', registro.matricula);
  console.log('Nombre:', registro.nombre);
  console.log('Apellido:', registro.apellido);
  console.log('Fecha de Nacimiento:', registro.fechaNacimiento);
  console.log('Edad:', registro.edad);
  console.log('______________________________________');
});
