"use strict";
const nombre2 = "Maria";
let nombre = "Juan";
const items = [];
items.push("Hola");
class Alumno {
    constructor(nombre) {
        this.nombre = nombre;
        this._notas = [];
    }
    set notas(n) {
        this._notas = n;
    }
    calcularNotaMedia() {
        let sumatorio = 0;
        this._notas.forEach((nota) => {
            sumatorio += nota;
        });
        return sumatorio / this._notas.length;
    }
    estudiar() {
        console.log("Estudiando....");
    }
}
const alumnos = new Map();
alumnos.set("11H", new Alumno("Iñigo"));
const al = alumnos.get("11H");
if (al) {
    al.notas = [8.9, 6.7, 5.8];
    console.log(al.calcularNotaMedia());
    al.estudiar();
}
function makeTodo(todo) {
    console.log(todo.desc);
}
makeTodo({ id: 1, desc: "Comprar" });
//# sourceMappingURL=repaso.js.map