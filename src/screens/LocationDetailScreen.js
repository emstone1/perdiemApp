import React from 'react';
import { Text } from 'react-native';

class LocationDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail View',
  };
  render() {
    const { country, location } = this.props.location;
    return (
      <Text>
        <Text>{country} - {location} {this.props.location}</Text>
      </Text>
    );
    }
}

export default LocationDetailScreen;
