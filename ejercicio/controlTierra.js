export default class ControlTierra {
    constructor(nave) {
        this._nave = nave;
    }

    realizarPaseoEspacial() {
        this._nave.ordenador.pasear(this._nave.astronautaPrincipal); 
    }

    arreglarMotor(){
        this._nave.ordenador.arreglar(this._nave.astronautaMecanico); 
    }


    recibirInfo(){
        this._nave.informarCombustible(this._nave.combustible); 
    }

    despegarNave() {
        if(this._nave.volando == false){
            this._nave.despegar(this._nave.nombre); 
            console.log("Has despegado con exito!")
        }else if (this._nave.volando == true){
            console.log("No puedes despegar porque la nave ya esta volando.")
        }
    }

    aterrizarNave() {
        if(this._nave.volando == true){
            this._nave.aterrizar(this._nave.nombre); 
            console.log("Has aterrizado con exito!")
        }else if(this._nave.volando == false){
            console.log("No puedes aterrizar porque la nave ya ha aterrizado.")
    }
}

    girarNave() {
        this._nave.girar(this._nave.angulos); 
    }

    
    
}