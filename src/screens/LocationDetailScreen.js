import React from 'react';
import { Text } from 'react-native';
import Exponent from 'exponent';

class LocationDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.location.country} - ${navigation.state.params.location.location}`,
    headerStyle: { marginTop: Exponent.Constants.statusBarHeight }
  });

  render() {
    const { country, location } = this.props.navigation.state.params.location;
    console.log(this.props.navigation.state.params.location);
    return (
      <Text>
        <Text>{country} {location}</Text>
      </Text>
    );
    }
}

export default LocationDetailScreen;
