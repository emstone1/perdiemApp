var may2017 = require('./may2017.json');
var output = './may2017unflattened.json';
var jsonfile = require('jsonfile')


//iterates through original data and checks for duplicates
function dedupe(current, new_data) {
  for(var i=0; i<new_data.length; i++) {
    if (current==new_data[i].locationCode)
    {
      return true;
    }
  }
  return(false);
}

function flatten(json_data) {
    var new_data = [];
    json_data.forEach((data, pos) => {
      if(dedupe(data.locationCode, new_data)) {console.log('skipped', data.locationCode)}
      else {new_data.push(
        {
        "locationCode": data.locationCode,
        "country": data.country,
        "location": data.location,
        "perDiem": []
      }
    )}
    })


    json_data.forEach((data, pos) => {
      var index = new_data.findIndex(e=>{
        return e.locationCode===data.locationCode
      })
      new_data[index].perDiem.push({
        "seasonCode": data.seasonCode,
        "seasonStartDate": data.seasonStartDate,
        "seasonEndDate": data.seasonEndDate,
        "lodging": data.lodging,
        "mealsAndIncidentals": data.mealsAndIncidentals,
        "dateEffective":data.dateEffective
      })
    });
    jsonfile.writeFile(output, new_data, function (err) {
      console.error(err)
    })       }


flatten(may2017);
