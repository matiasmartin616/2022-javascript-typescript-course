export default class Propietario{
    constructor(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(valor){
        this._nombre = valor;
    }
}