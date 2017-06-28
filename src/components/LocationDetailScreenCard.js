import React from 'react';
import moment from 'moment';
import { Card, CardItem, Icon, Text } from 'native-base';

class LocationDetailScreenCard extends React.Component {

  render() {
    let { seasonStartDate, seasonEndDate } = this.props.season;
    const { mealsAndIncidentals, lodging, dateEffective } = this.props.season;
    seasonStartDate = moment(seasonStartDate, 'DD-MMM');
    seasonEndDate = moment(seasonEndDate, 'DD-MMM');
    return (

      <Card>
        <CardItem header>
          <Text>{seasonStartDate.format('MMM DD')}
            - {seasonEndDate.format('MMM DD')}</Text>
        </CardItem>
        <CardItem>
          <Icon name="hotel" />
          <Text>
            Lodging - ${lodging}
            / night</Text>
        </CardItem>
        <CardItem>

          <Icon name="beer" />
          <Text>
            Meals & Incidentals - ${mealsAndIncidentals}
            / day</Text>

        </CardItem>
        <CardItem>
          <Text>Date Effective: {dateEffective}</Text>
        </CardItem>
      </Card>

    );
  }
}

export default LocationDetailScreenCard;
