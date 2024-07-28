export default class Astronauta {
    constructor(nombre) {
        this._nombre = nombre;
    }

    //getter
    get nombre(){
        return this._nombre;
    }

    pasear() {
        console.log(`Paseo espacial de ${this._nombre}...`);
    }
}