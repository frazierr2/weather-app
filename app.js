const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// GETTING USER SUPPLIED LOCATION THROUGH COMMAND LINE WITH 'process.argv'
const location = process.argv[2]

//  CHECK IF USER ENTERED LOCATION, IF THEY DO THEN RUN THE APP.
if (!location) {
  console.log('Please provide a address');
} else {
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    // CHAINING CALLBACKS
    forecast(latitude, longitude , (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    })
  })
}

