<!DOCTYPE html>
<html>
    <head>
        <title>PAREJAS</title>
    </head>
    <body>
    <script type="module" >
import ControlTierra from "./controlTierra.js";
import Astronauta from "./astronauta.js";
import Nave from "./nave.js";
import Ordenador from "../../sesion6/scripts/ordenador.js";

//composicion
const ordenadorABordo = new Ordenador("simon");
const astronautas = [new Astronauta("Peter"), new Astronauta("Bianca")];

const naveEspacial = new Nave("Utk", ordenadorABordo, astronautas);

const centroControl = new ControlTierra(naveEspacial);

//centroControl.realizarPaseoEspacial(); 
centroControl.despegarNave();
</script>
</body>
</html>