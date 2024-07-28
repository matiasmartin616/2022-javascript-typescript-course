export default class Ordenador {
    constructor(nombre) {
        this._nombre = nombre;
    }

    //getter
    get nombre(){
        return this._nombre;
    }
    despegar(nave){
        nave.despegar();
    }

    pasear(astro) {
        //throw "Paseo";
        astro.pasear();
    }
}