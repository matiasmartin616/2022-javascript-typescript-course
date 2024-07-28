export const biblio = {
//data
    libros:[],
    //comportamiento
    //Funcion arrow
    //filtrar:(n_paginas) => biblio.libros.filter((libro) => libro.numeroPaginas > n_paginas)
    //Funcion clasica
    filtrar: function(n_paginas){
        return this.libros.filter((libro) => libro.numeroPaginas > n_paginas)
    },
    buscar:(nombre) => biblio.libros.find((libro) =>  libro.autor.toLowerCase() == nombre.toLowerCase()),
    forrarLibros:function() {
        this.libros = this.libros.map((libro) => Object.assign(libro, {forrado:true}))//El map lo que hace es transformar elemenetos
    },
    listarLibros: function(){
        this.libros.forEach((libro)=> console.log(libro))
    },
    prestarLibro:function(titulo){
        const prestado = this.buscar(titulo);
        if (prestado != undefined){
            //Actualizar la libreria
            this.libros = this.libros.filter((libro) => libro.titulo != prestado.titulo);
        }
        return prestado;
    },
    devolverLibro:function(devuelto){
        if(devuelto !== null && devuelto !== undefined){ 
            if(this.buscar(devuelto.titulo) === undefined){
                this.libros.unshift(devuelto);//Añade elemento en la cabecera
            }
        }
    }
}