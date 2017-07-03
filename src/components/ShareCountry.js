import { Icon } from 'native-base';
import React from 'react';
import { Share } from 'react-native';

const ShareCountry = (props) => <Icon
name="share" onPress={() => Share.share({
    message: `${props.location.location}, ${props.location.country}: ${summarizePerDiem(props.location.perDiem)}`,
    url: undefined,
    title: 'Per Diem info for'
  }, {
    // Android only:
    dialogTitle: 'Save/Share Per Diem Info',
  })}
/>;

function summarizePerDiem(perDiemData) {
  let summary = '';
  perDiemData.forEach(x => { summary += `${x.seasonStartDate} through ${x.seasonEndDate} - Lodging: $${x.lodging} M&IE: $${x.mealsAndIncidentals}; `; });
  return summary;
}

export default ShareCountry;
