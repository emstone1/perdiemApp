const may2017 = require('./may2017.json');
const jsonfile = require('jsonfile');

const output = './may2017unflattened.json';

//iterates through original data and checks for duplicates
function dedupe(current, newData) {
  for (let i = 0; i < newData.length; i++) {
    if (current === newData[i].locationCode) {
      return true;
    }
  }
  return (false);
}

function flatten(jsonData) {
    const newData = [];
    jsonData.forEach((data) => {
      let { country, location } = data;
      const { locationCode } = data;
      console.log(data);
      if (dedupe(data.locationCode, newData)) { console.log('skipped', data.locationCode); } else {
      if (location === '[Other]') location = 'Other';
      country = toTitleCase(country);
newData.push(
        {
        locationCode,
        country,
        location,
        perDiem: []
      }
    );
}
    });


    jsonData.forEach((data) => {
      const index = newData.findIndex(e => {
        return e.locationCode === data.locationCode;
      });
      newData[index].perDiem.push({
        seasonCode: data.seasonCode,
        seasonStartDate: data.seasonStartDate,
        seasonEndDate: data.seasonEndDate,
        lodging: data.lodging,
        mealsAndIncidentals: data.mealsAndIncidentals,
        dateEffective: data.dateEffective
      });
    });


    jsonfile.writeFile(output, newData, (err) => {
      console.error(err);
    });
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

flatten(may2017);
