const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9dcbb455686bd09d77ac401aa2450f1a&units=metric`);


    return resp.data.main.temp;


}





module.exports = {
    getClima
}