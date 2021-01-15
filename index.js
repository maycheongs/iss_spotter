const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');



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