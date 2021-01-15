//Libraries required:

const request = require('request');
//------------------------------------

//function to request by url, key for json value returned and an errhandler callback.
const requestJsonObj = (address, callback) => {
  request(address, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `${response.statusCode}: retrieved ${body}`;
      callback(msg, null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data);
  });
};
//an API request to retrieve user's IP address using IPIFY.ORG
//callback to handle the result of the request (error or IP address)
const fetchMyIP = callback => {
  requestJsonObj('https://api64.ipify.org?format=json', (err, obj) => {
    if (err) callback(err);
    else callback(null, obj.ip);
  });
};

//FREE GEO IP (freegeoip.app) an API to convert IP to longitude/latitude

const fetchCoordsByIP = (ip, callback) => {
  requestJsonObj(`https://freegeoip.app/json/${ip}`, (err, obj) => {
    if (err) callback(err);
    else {
      const {latitude, longitude} = obj;
      callback(null, {latitude, longitude});
      //console.log(typeof obj.latitude)
    }
  });
};

const fetchISSFlyOverTimes = (latlon, callback) => {
  const lat = latlon.latitude;
  const lon = latlon.longitude;

  if (isNaN(lat) || isNaN(lon)) {
    callback('The coords don\'t make sense', null);
    return;
  }
  requestJsonObj(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`, (err, obj) => {
    if (err) callback(err, null);
    else {    
      callback(null, obj.response);
    }
  });
};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
};