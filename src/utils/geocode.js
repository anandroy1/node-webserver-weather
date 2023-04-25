//=========== Geocoding using callback ================

const request = require("request");

const geocode = (address, callback) => {
    const url = "origanalurl"

    request({ url, json: true }, (error, { body}) => {
        if (error) {
            callback("Unable to connect to location!", undefined)
        } else if (body.features.length === 0) {
            callback("Unable to find location, Try another search", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].centre[0],
                longitute: body.features[0].centre[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode