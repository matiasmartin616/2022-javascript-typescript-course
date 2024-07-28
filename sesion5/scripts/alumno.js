 //Metodo 'constructor', sirve parar crear alumnos luego se les incluye en un array linea 9-12 y 47-48
export default function Alumno(dni,nombre,apellido,curso,nota,asignaturas){
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
    this.nota = nota;
    this.asignaturas = new Array();
}
/*
//Asignar una funcion a un solo objeto
maria.listarAsignaturas = function(){
    this.asignaturas.forEach(asig => console.log("Asig:",asig));
}
maria.listarAsignaturas();
*/
//Prototype: asignar propiedades al resto de objetos que sean de la misma clase
Alumno.prototype.listarAsignaturas = function(){
    this.asignaturas.forEach(asig => console.log("Asig:",asig));
}

Alumno.prototype.anadirAsignaturas = function(asig){
    this.asignaturas.push(asig);
}