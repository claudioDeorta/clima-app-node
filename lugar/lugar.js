const axios = require('axios');

const getLugarLng = async(dir) => {



    const encodedUlr = encodeURI(dir);
    console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': 'f8ca49c119msh656c96a37e4721fp161a59jsnfeeaf5f89f0a' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLng
}