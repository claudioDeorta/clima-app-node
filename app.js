const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

const getInfo = async(direccion) => {

    try {

        const dir = await lugar.getLugarLng(direccion);

        const cli = await clima.getClima(dir.lat, dir.lng);

        return `El clima de ${ dir.direccion} es de ${ cli }`;

    } catch (e) {

        return `No se pudo determinar el clima de ${ direccion }`;

    }



}

//lugar.getLugarLng(argv.direccion).then(console.log);

console.log("=================");

getInfo(argv.direccion).then(console.log).catch(console.log);