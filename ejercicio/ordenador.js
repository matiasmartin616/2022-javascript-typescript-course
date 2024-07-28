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

    informar(nave){
        nave.informarCombustible();
    }
    
    pasear(astro) {
        astro.pasear();
    }

    girar(nave){
        nave.girar();
    }

    arreglar(astro){
        astro.arreglar();
    }
}