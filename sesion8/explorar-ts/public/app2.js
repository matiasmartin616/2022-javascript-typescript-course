"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mensaje_1 = require("./entidades/mensaje");
const mensajes = new Array();
const verMensajes = (mensas) => {
    mensas.forEach((msj) => console.log(msj.id));
};
mensajes.push(new mensaje_1.Mensaje(1, new Date(), "Mensaje1"));
mensajes.push(new mensaje_1.Mensaje(2, new Date(), "Mensaje2"));
mensajes.push(new mensaje_1.Mensaje(3, new Date()));
const mensajeOriginal = "E*123|B*456";
const mensajesTroceados = mensajeOriginal.split("|");
console.log(mensajesTroceados);
mensajesTroceados.forEach(cadena => {
    const resultadoSplit = cadena.split("*");
    const mensa = new mensaje_1.Mensaje(Number(resultadoSplit[1]), new Date(), resultadoSplit[0]);
    mensajes.push(mensa);
});
verMensajes(mensajes);
//# sourceMappingURL=app2.js.map