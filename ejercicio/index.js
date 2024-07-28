import ControlTierra from "./controlTierra.js";
import Astronauta from "./astronauta.js";
import Nave from "./nave.js";
import Ordenador from "./ordenador.js";

//composicion
const ordenadorABordo = new Ordenador("simon");
const astronautas = [new Astronauta("Esther"), new Astronauta("Iñigo")];

const naveEspacial = new Nave("Utk", 150,10, ordenadorABordo, astronautas);

const centroControl = new ControlTierra(naveEspacial);

centroControl.despegarNave();
centroControl.girarNave();
centroControl.despegarNave();
centroControl.realizarPaseoEspacial();
centroControl.arreglarMotor();
centroControl.recibirInfo();
centroControl.aterrizarNave();
centroControl.aterrizarNave();