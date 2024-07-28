import Persona from "./persona.js";

export default class Socio extends Persona{
    
    constructor(dni,nombre,apellido,numSocio){//Las llaves se usan para quedarte con las propiedades que te interesan 
        super(dni,nombre,apellido);//Estos datos los hereda de la clase persona
        this._numSocio = numSocio;
    }

    get numSocio(){
        return this._numSocio;
    }
    //comportamiento
    entrenar(){
        return "Estoy entrenando...";
    }
}