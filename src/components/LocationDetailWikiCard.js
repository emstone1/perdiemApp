import React from 'react';
import { Card } from 'native-base';
import { WebView } from 'react-native';

class LocationDetailWikiCard extends React.Component {
  render() {
          return (
            <Card>
              <WebView
      source={{ uri: 'https://github.com/facebook/react-native' }}
      style={{ marginTop: 20 }}
              />
  </Card>

);
}
}

export default LocationDetailWikiCard;
