export default class Nave {
    constructor(nombre, ordenador, tripulacion) {
        this._nombre = nombre;
        this._ordenador = ordenador;
        this._tripulacion = tripulacion;
    }

    //getter
    get nombre(){
        return this._nombre;
    }

    get ordenador() {
        return this._ordenador;
    }

    get astronautaPrincipal() {
        return this._tripulacion[0];
    }

    //comportamiento
    girar(nAngulo) {
        console.log(`Nave girando ${nAngulo} grados...`);
    }

    despegar() {
        console.log("Nave despegando...");
    }

    aterrizar() {
        console.log("Nave aterrizando...");
    }

    


}