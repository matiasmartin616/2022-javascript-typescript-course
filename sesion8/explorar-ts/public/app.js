"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hola Sesion 8");
const calculadoraPrecios_1 = require("./calculadoraPrecios");
const ordenador = {
    marca: "HP",
    modelo: "Trancent",
    precio: 250,
    software: ""
};
console.log(ordenador.modelo);
ordenador.software = "Windows";
console.log(ordenador.software);
const calculadora = new calculadoraPrecios_1.CalculadoraPrecios();
const resultSuma = calculadora.sumar(2, 4);
console.log(resultSuma);
const items = new Array();
items.push(1);
items.push("Hola");
items.push(true);
items.forEach(item => console.log(item));
const itemsTS = [1, 2, 3, 4, 5];
let sumatorio = 0;
for (const item of itemsTS) {
    console.log(sumatorio += item);
}
let direccion;
direccion = "UP";
console.log(direccion);
function procesarDatos(item) {
    return item;
}
const e = procesarDatos({ edad: 12, estudiante: true });
console.log(e.edad);
const t = [1, 2, 3, 4, true];
let coche;
coche = ["Seat", "Azteca", "Rojo", 5, false];
class Documento {
    constructor(titulo) {
        this._titulo = titulo;
    }
    get titulo() {
        return this._titulo;
    }
    escanear() {
        console.log(`Escaneando ${this.titulo}...`);
    }
    imprimir() {
        console.log(`Imprimiendo ${this.titulo}...`);
    }
}
const carpeta = [
    new Documento("Chuletario TS"),
    new Documento("Chuletario JavaSCript"),
    new Documento("Chuletario HTML")
];
carpeta.forEach((doc) => doc.escanear());
carpeta.forEach((doc) => doc.imprimir());
//# sourceMappingURL=app.js.map