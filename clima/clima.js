

 const axios = require('axios');

 const getClima = async ( lat, lng ) => {

        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8e8ac2caded1f48023c8d413f1a5829a&units=metric`)


        return resp.data.main.temp 

 }

 module.exports= {
     getClima
 }