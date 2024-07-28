const nombre2 = "Maria";
let nombre:string ="Juan";

const items:string[]=[]//Array de strings
items.push("Hola");


class Alumno{
    private nombre:string;
    private _notas:number[];


    set notas(n:number[]){
        this._notas = n;
    }

    constructor(nombre:string){
        this.nombre=nombre;
        this._notas = [];
    }

    calcularNotaMedia():number{
        let sumatorio = 0;
        this._notas.forEach((nota:number)=> {
            sumatorio += nota;//sumatorio = nota + nota
        })
        return sumatorio / this._notas.length;
    }
    //estudiar = () => console.log("Estudinado....")//estudia es ()=> esta funcion 
    estudiar(){
        console.log("Estudiando....");
    }
}

const alumnos = new Map<string,Alumno>()//hay que especificar el tipo de la clave:string,valor:alumno
alumnos.set("11H",new Alumno("Iñigo"));

const al = alumnos.get("11H")//El get se hace a partir de la clave
if(al){
    al.notas = [8.9,6.7,5.8];
    console.log(al.calcularNotaMedia());
    al.estudiar();
}

//interface
interface ITodo{
    id:number;
    desc:string;//desc?:string => significa que desc es opcional 
}

function makeTodo(todo:ITodo){//parametro tipo Interfaz Todo
    console.log(todo.desc);
}

makeTodo({id:1,desc:"Comprar"});//tiene que tener los mismos elementos que el interfaz