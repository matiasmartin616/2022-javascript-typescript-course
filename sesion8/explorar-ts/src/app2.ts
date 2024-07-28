import { IMensaje } from "./interfaces/IMensaje"
import { Mensaje } from "./entidades/mensaje"

const mensajes:IMensaje[] = new Array()

// funcion verMensajes arrow function
const verMensajes = (mensas:IMensaje[])=> {
    mensas.forEach((msj)=>console.log(msj.id));
}


mensajes.push(new Mensaje(1,new Date(),"Mensaje1"));

mensajes.push(new Mensaje(2,new Date(),"Mensaje2"));

mensajes.push(new Mensaje(3,new Date()));

//Parsear este mensaje
const mensajeOriginal = "E*123|B*456"

const mensajesTroceados = mensajeOriginal.split("|");
console.log(mensajesTroceados);

mensajesTroceados.forEach(cadena => {
    const resultadoSplit = cadena.split("*");
    const mensa:IMensaje = new Mensaje(Number(resultadoSplit[1]),new Date(),resultadoSplit[0]);
    mensajes.push(mensa);
})

verMensajes(mensajes);