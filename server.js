const axios = require('axios'); // declarar axios

const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima 3 para el cmabio',
    demand: true
  }
}).argv;


let encodedUrl = encodeURI(argv.direccion) // encodeURI se utiliza para escapar a los espacios de la direccion
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}+CA&key=AIzaSyD5Z9NYEynycmMZ5HajTr45VU88J-rEzG0`)
      .then( resp => {

        let location = resp.data.results[0];
        let coors = location.geometry.location;
        //
        console.log('Direccion:', location.formatted_address);
        console.log('lat',coors.lat);
        console.log('lng',coors.lng);

        //console.log(resp.data);
        //console.log(JSON.stringify(resp.data,undefined,2));
         console.log(resp.status);
      })
      .catch(err => console.log('ERROR!!', err));
