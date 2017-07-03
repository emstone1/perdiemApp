import React from 'react';
import { Container, StyleProvider, Content, getTheme } from 'native-base';
import Exponent from 'exponent';
import LocationDetailScreenCard from '../components/LocationDetailScreenCard';
import LocationDetailWikiCard from '../components/LocationDetailWikiCard';
import ShareCountry from '../components/ShareCountry';

const variables = {
    iconFamily: 'FontAwesome',
    iconFontSize: 28,
  };

class LocationDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.location.location} - ${navigation.state.params.location.country}`,
    headerStyle: { marginTop: Exponent.Constants.statusBarHeight },
    headerRight: <ShareCountry location={navigation.state.params.location} />
  });

  render() {
    const { perDiem } = this.props.navigation.state.params.location;
    return (
      <Container><StyleProvider style={getTheme(variables)}>
        <Content>
          {perDiem.map((season) => <LocationDetailScreenCard season={season} key={season.seasonCode} />)}
        <LocationDetailWikiCard />
      </Content></StyleProvider>
      </Container>
    );
    }
}

export default LocationDetailScreen;
