
export default class Gimnasio{
    //estado
    constructor(cuota,location){//cuota y ubicacion se pasan desde el exterior
        //atributos
        this._socios = new Array();// se puede poner tambien []
        this._cuota = cuota;
        this._location = location;
    }

    get cuota(){
        return this._cuota;
    }

    set cuota(valor){
        this._cuota = valor;
    }

    get location(){
        return this._location;
    }
    //comportamiento
    matricular(socio){
        this._socios.push(socio);//incluir en el array socios el socio introducido
    }

    listarSocios(){
        this._socios.forEach(socio => console.log(socio));
    }
}