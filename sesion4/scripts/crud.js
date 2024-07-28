function buscarAlumno(dni,alumnos){
    let alumnoBuscado = null;
    if(alumnos.has(dni)){
        alumnoBuscado = alumnos.get(dni);
    }
    return alumnoBuscado;
}

function matricularAlumno(alumno,alumnos){
    alumnos.set(alumno.dni,alumno);
}

function darDeBajaAlumno(dni,alumnos){
    if (alumnos.has(dni)){
        alumnos.delete(dni);
    }
}

function actualizarDatosAlumno(alumno,alumnos){
    if(alumnos.has(alumno.dni)){
        alumnos.set(alumno.dni,alumno)//Setear el dni del alumno pasado por un nuevo alumno
    }
}

function listarAlumnos(alumnos){
    //To do I+D recorrido de un Map()
    if(alumnos){
        
        alumnos.forEach((valor,clave)=> console.log("Alumno:",valor));
        
        /*
        for(const alumno of alumnos.entries()){//entries, keys y values 
            console.log("Listado:",alumno[1]);//posicion 1 del array se corresponde a los valores
        }
        *//*
        for(const alumno of alumnos.values()){
            console.log("Listado:",alumno);
        }
        */
    }
}

function asignarAsignaturasAlumno(alumno,asignaturas){
    if(alumno && asignaturas){
        alumno.asignaturas = asignaturas;//Le añadimos un nuevo atributo y le damos el parametro asignaturas
    }
}

export {buscarAlumno, matricularAlumno, darDeBajaAlumno,actualizarDatosAlumno, listarAlumnos, asignarAsignaturasAlumno};
