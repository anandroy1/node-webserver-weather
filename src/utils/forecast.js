const request = require("request")




const forecast = (location, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=2fd695fcb2460feb9cf5f3c99437f259&query=" + location 

    request({ url, json: true }, (error, { body}) => {
        if (error) {
            callback("Unable to connect with weather API", undefined)
        } else if (body.error) {
            callback("Unable to find Location", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ", It is currently " + body.current.temperature + " degree out. It feels like " + body.current.feelslike + " degree out.")
        }
    })
}

module.exports = forecast