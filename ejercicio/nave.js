export default class Nave {
    constructor(nombre, combustible,angulos, ordenador, tripulacion) {
        this._nombre = nombre;
        this._combustible = combustible;
        this._angulos = angulos
        this._ordenador = ordenador;
        this._tripulacion = tripulacion;
        this._volando = false;
    }

    //getter
    get nombreNave(){
        return this._nombre;
    }

    get ordenador() {
        return this._ordenador;
    }

    get combustible(){
        return this._combustible;
    }

    get astronautaPrincipal() {
        return this._tripulacion[0];
    }
    
    get astronautaMecanico(){
        return this._tripulacion[1];
    }

    get volando(){
        return this._volando;
    }

    set volando(v){
        this._volando = v;
    }

    get angulos(){
        return this._angulos;
    }

    //comportamiento
    girar() {
        console.log(`Nave ${this._nombre} girando ${this._angulos} grados...`);
    }
    
    despegar() {
        console.log(`Nave ${this._nombre} despegando...`);
        this._volando = true;
    }

    aterrizar() {
        console.log(`Nave ${this._nombre} aterrizando...`);
        this._volando = false;
    }

    informarCombustible(){
        console.log(`${this._combustible} litros de combustible.`)
        if(this._combustible < 50){
            console.log("Nivel de combustible: bajo");
            this.aterrizar();
        }else if (this._combustible > 100) {
            console.log("Nivel de combustible: Optimo");
        }
    }
}