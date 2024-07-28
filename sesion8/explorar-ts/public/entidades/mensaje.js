"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensaje = void 0;
class Mensaje {
    constructor(id, timestamp, contenido = "Valor por defecto") {
        this._id = id;
        this._contenido = contenido;
        this._timestamp = timestamp;
    }
    get contenido() {
        return this._contenido;
    }
    get id() {
        return this._id;
    }
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(ts) {
        this._timestamp = ts;
    }
}
exports.Mensaje = Mensaje;
//# sourceMappingURL=mensaje.js.map