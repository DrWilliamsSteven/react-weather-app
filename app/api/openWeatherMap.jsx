var axios = require("axios");
// var dotenv = require('dotenv');
// dotenv.load();

var KEY = process.env.WEATHER_API_KEY;
var OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + KEY;

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(err) {
            console.log(err.response.data.message)
            throw new Error('Unable to fetch weather for that location: ' + err.response.data.message);
        });
    }
}
