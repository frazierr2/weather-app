const request = require('request');


const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a269b01c4f1ac1897fb92aa02e326d43&query=${latitude},${longitude}&units=f`

  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Could not connect to weather service', undefined)
    } else if (response.body.error) {
      callback('Unable to find location within Weather API', undefined)
    } else {
      callback(undefined, `It is currently ${response.body.current.temperature} degrees outside.`)
    }
  })
}

module.exports = forecast