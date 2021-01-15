const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require('./iss');



// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('',(error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coords:' , coords);
// });

// fetchISSFlyOverTimes( { latitude: 'hi', longitude: -73.6091 }, (err, data) => {
//     if (err) {
//       console.log("It didn't work!" , err);
//       return;
//     }
  
//     console.log('It worked! Returned:' , data);
//   });

const passFormat = arr => {
  arr.forEach(data => {
    let dateObj = new Date(data.risetime * 1000);
    console.log(`next pass at ${dateObj.toString()} for ${data.duration} seconds`)
  })
}

nextISSTimesForMyLocation((error, passArr) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  passFormat(passArr);
});

