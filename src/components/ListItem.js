import React, { Component } from 'react';
import { ListItem } from 'native-base';
import { Text } from 'react-native';

class PDListItem extends Component {


  render() {
    const { country, location } = this.props.location;
    return (
      <ListItem button onPress={() => this.props.onPress(this.props)}>
        <Text>{country} - {location}</Text>
      </ListItem>
    );
  }

}

export default PDListItem;
