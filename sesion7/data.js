export default class Data{
    constructor(urlBase){
        this._urlBase = urlBase;
    }

    //getter y setter

    //comportamiento
    getUsers(callback){
        fetch(`${this._urlBase}/users`)
        .then(response => response.json())
        .then(json => callback(json))
    }

    async getUsers(callback){
        return await fetch(`${this._urlBase}/users`)
        .then(response => response.json())
        .then(json => callback(json))
    }

}
