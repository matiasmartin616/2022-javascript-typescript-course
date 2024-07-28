import { IMensaje } from "../interfaces/IMensaje";

export class Mensaje implements IMensaje { //Mensaje debe contener los atributos de la interfaz

    //Declaracion de las privadas
    private _contenido:string;//hay que inicializar este atributo en el constructor
    private _id: number;
    _timestamp: Date;

    //Getter: son necesarios para acceder a las variables
    //hay que crear los gets cuando implementas la interfaces.
    get contenido(){
        return this._contenido;
    }

    get id(){
        return this._id;
    }

    get timestamp(){
        return this._timestamp;
    }

    set timestamp(ts){
        this._timestamp = ts;
    }

    constructor(id:number,timestamp:Date, contenido:string = "Valor por defecto"){
        this._id = id;
        this._contenido = contenido;
        this._timestamp = timestamp;
    }

    


}