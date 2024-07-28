export default class ControlTierra {
    constructor(nave) {
        this._nave = nave;
    }

      

    despegarNave() {
        this._nave.ordenador.despegar(); //TODO
    }

    aterrizarNave() {

    }

    girarNave() {

    }

    realizarPaseoEspacial() {
        this._nave.ordenador.pasear(this._nave.astronautaPrincipal); 
        
    }

    
}