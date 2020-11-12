
 const axios = require('axios');

 const getLugarLatLng = async( dir ) => {

     const encodedURL = encodeURI( dir )
    
     const instance = axios.create({
         baseURL:  `https://api.opencagedata.com/geocode/v1/json?q=${dir}&key=5e5bc2a2b3df4dcab5139406c5ec0750`
     });
    
    const resp = await instance.get();

     if ( resp.data.results.lenght === 0 ){
         throw new Error(`No hay resultado para ${ dir }`)
     }

     const data = resp.data.results[0];

     const direccion = data.formatted; 
     const lat = data.geometry.lat; 
     const lng = data.geometry.lng; 

    return {
        direccion,
        lat,
        lng
    }

 }

 module.exports = {
    getLugarLatLng
 }
