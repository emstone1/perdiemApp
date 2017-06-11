var may2017 = require('./may2017.json');

function flatten(json_data) {
  if(typeof json_data != 'undefined' && json_data.length > 0) {
    let current_location_code = 0;
    let next_location_code = 0;
    var new_flatten_data ;
    json_data.forEach((data, pos) => {
      current_location_code = data['locationCode'];
      for (var i = 0; i < json_data.length; i++) {
        if (i != pos) {
          if (json_data[i].locationCode == current_location_code) {
             console.log('Found location',  current_location_code );
          }
        }
      }
    });
  }
}

flatten(may2017);
