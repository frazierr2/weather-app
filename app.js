const request = require('request')

const weatherURL = 'http://api.weatherstack.com/current?access_key=a269b01c4f1ac1897fb92aa02e326d43&query=37.8267,-122.4233&units=f'

// request({ url: weatherURL, json: true}, (error, response) => {
//   const weather = response.body.current

//   if (error) { // Low level check
//     console.log('Unable to connect to weather service');
//   } else if(response.body.error) { // Checking to see if error from response location for example.
//     console.log('Unable to find location');
//   } else {
//     console.log(`It is currently ${weather.temperature} degrees outside.`);
//   }
// })


// GEOCODING PROCESS
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/austin.json?access_token=pk.eyJ1IjoiZnJhemllcnIyIiwiYSI6ImNraHZidHplejE2OHYyeW54a3poNnR5M2sifQ.87yW8JgrmZ-y2jXQEfp1SA&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
  const userLocation = response.body.features[0]
  const longitude = userLocation.center[0]
  const latitude = userLocation.center[1]

  if (error) {
    console.log('Unable to connect to Geocode Service');
  } else if (userLocation.length === 0) {
    console.log('Unable to find location. Try another search.');
  } else {
    console.log('Longitude: ', longitude, ' Lattitude: ', latitude);
  }
})