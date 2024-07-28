
/*class Vehiculo{
    constructor(ruedas){
        this.numRuedas = ruedas;
    }
}
*/

export default class Coche{
    constructor(marca,modelo,combustible,propietario){
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
        this.propietario = propietario;
    }
    arrancar(){
        console.log(`Coche ${this.marca} en marcha.`);
    }
    
    parar(){
        console.log("El coche se ha parado");
    }
    obtenerPropietario(){
        return this.propietario;
    }
}
