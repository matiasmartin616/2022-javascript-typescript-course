const axios = require('axios');

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  console.log(path);
    res.sendFile(path.join(__dirname+'/public/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/data.json',function(req,res){
    res.send(obtener(function(data) {console.log(data)}));
      //__dirname : It will resolve to your project folder.
  });

//add the router
app.use('/data.json', router);
app.use(express.static(path.join(__dirname, "src")));
app.use('/', router);

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.4165&lon=-3.70256&exclude=hourly,daily&appid=06e66857ac8741cd78372c62966161e6&lang=ES";

function obtenerData(callback){
    axios.get(url).then(resp => callback(resp.data)
);
}
