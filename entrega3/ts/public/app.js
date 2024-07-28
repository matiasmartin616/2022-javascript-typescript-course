"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://api.openweathermap.org/data/3.0/onecall?lat={ [42.8169]}&lon={ -1.6432}&appid={06e66857ac8741cd78372c62966161e6}";
axios_1.default.get(url).then(response => {
    const todo = response.data;
    const lon = todo.lon;
    const lat = todo.lat;
    console.log(lon, lat);
});
//# sourceMappingURL=app.js.map

