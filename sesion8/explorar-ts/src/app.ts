console.log("Hola Sesion 8")

import {CalculadoraPrecios} from "./calculadoraPrecios";

const ordenador ={
    marca:"HP",
    modelo:"Trancent",
    precio:250,
    software:""
};

console.log(ordenador.modelo);

ordenador.software ="Windows";
console.log(ordenador.software);

const calculadora = new CalculadoraPrecios();
const resultSuma = calculadora.sumar(2,4);
console.log(resultSuma);

//Array en JS
const items = new Array();
items.push(1);
items.push("Hola");
items.push(true);

items.forEach(item => console.log(item));

//Array en TS
const itemsTS:number[] = [1,2,3,4,5];

let sumatorio:number = 0;
for(const item of itemsTS){
    console.log(sumatorio += item);
}

//itemsTS.forEach((item:number)=> console.log(sumatorio += item));

type stringYnulo = string | null;

//literal types
let direccion: 'UP' | 'DOWN';//Solo acepta esos valores
direccion = "UP";
console.log(direccion);

function procesarDatos(item:{edad:number,estudiante:boolean}){
    /*if(items){
        return item[0];
    } else{
        return null;
    }*/return item;
}
const e = procesarDatos({edad:12,estudiante:true});
console.log(e.edad);

type arrayMisValores = (number | boolean) []//Un tipo array de valores que puede tener valores numerico o booleanos
const t:arrayMisValores = [1,2,3,4, true];

//tuplas:
let coche:[string,string,string,number,boolean];
coche = ["Seat","Azteca","Rojo",5,false];
/*
//interfaces
interface Persona{
    nombre:string;
    apellido:string | null;
    esProgramador: boolean;
    hijos?:boolean
}

const alumno:Persona = {
    nombre:"Inigo", 
    apellido:"Indave", 
    esProgramador:true, 
}

class Alumno implements Persona{
    constructor(nombre:string){
        this.nombre = nombre;
        this._apellido = apellido;
    }
}
*/
interface Imprimible{
    imprimir():void;
}

interface Escaneable{
    escanear():void;
}

class Documento implements Imprimible, Escaneable{
    private _titulo:string;//atributo titulo, se puede proteger el atributo
    
    get titulo(){           //En TS hay que hacer una declaracion previa de los atributos
        return this._titulo;
    }

    constructor(titulo:string){
        this._titulo = titulo//asignar el atributo
    }
    escanear(): void {
        console.log(`Escaneando ${this.titulo}...`);
    }
    
    imprimir(): void {
        console.log(`Imprimiendo ${this.titulo}...`);
    }
}


const carpeta:Documento[] = [//carpeta es un array de tipos Documento con 4 obejtos de tipo Documento
                                new Documento("Chuletario TS"),
                                new Documento("Chuletario JavaSCript"),
                                new Documento("Chuletario HTML")

                            ]

carpeta.forEach((doc:Documento)=> doc.escanear());                            
carpeta.forEach((doc:Documento)=> doc.imprimir());



