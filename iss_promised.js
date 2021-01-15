const request = require('request-promise-native');

const fetchMyIP = () => {
  const ipPromise = request("https://api64.ipify.org?format=json");
  return ipPromise;
};

const fetchCoordsByIP = body => {  
  const ip = JSON.parse(body).ip;
  const coords = request(`https://freegeoip.app/json/${ip}`);
  return coords;
};

const fetchISSFlyOverTimes = body => {
  jsonBody = JSON.parse(body)
  const lat = jsonBody.latitude;
  const lon = jsonBody.longitude;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then (fetchCoordsByIP)
  .then (fetchISSFlyOverTimes)
  .then (body => {
    const response = JSON.parse(body).response;
    return response;
  })
}

module.exports = {
  nextISSTimesForMyLocation
};