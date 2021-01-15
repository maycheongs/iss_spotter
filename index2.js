const {nextISSTimesForMyLocation} = require('./iss_promised');




const convertData = passedList => {
  passedList.forEach(obj => {
    let date = new Date(obj.risetime);
    console.log(`${date.toString()} for ${obj.duration} seconds`)
  })

}

nextISSTimesForMyLocation()
.then (response => {
  convertData(response)
})
.catch (error => {
  console.log(error.message)
})
