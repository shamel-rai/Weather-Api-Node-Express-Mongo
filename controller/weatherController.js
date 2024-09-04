const axios = require('axios');
const weatherModel = require('../model/weatherDataModel')


const key = process.env.API_KEY;
console.log('key', key);




exports.fetchWeather = async (req, res, next) => {
    try {

        // const { lat, lon } = req.query;
        // console.log("lat, log", lat, lon);
        const { city } = req.query; 

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
        // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        const response = await axios.get(url);


        const weather = response.data;

        const weatherData = await weatherModel.create(weather)

        res.status(200).json({
            status: 'Success',
            data: {
                weather
            }
        })
    }
    catch (err) {
        console.log('err', err);

    }
}
