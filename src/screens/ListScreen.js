import Exponent from 'exponent';
import React from 'react';
import { Platform, Text } from 'react-native';
import {
  Button,
  Container,
  Icon,
  List,
  Item,
  Input,
  Content,
  Header
} from 'native-base';
import ListItem from '../components/ListItem';
import data from '../data/may2017.json';

class ListScreen extends React.Component {
  static navigationOptions = {
      header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
        isReady: false,
        filter: '',
        data
      };
      this.handleChildPress = this.handleChildPress.bind(this);
    }

async componentWillMount() {
    if (Platform.OS === 'android') {
      await Exponent.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    this.setState({ isReady: true });
  }

  handleChildPress(place) {
    const { navigate } = this.props.navigation;
    navigate('Detail', { ...place });
  }

  render() {
    if (!this.state.isReady) {
      return <Exponent.Components.AppLoading />;
    }
    return (


      <Container marginTop={Exponent.Constants.statusBarHeight}>

        <Header searchBar rounded>
    <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Enter a place name"
          value={this.state.filter}
          onChangeText={(text) => this.setState({ filter: text })}
        />
    </Item>
    <Button transparent>
        <Text>Search</Text>
    </Button>
</Header>
                      <Content>
                        <List
                          dataArray={filter(data, this.state.filter)}
                          renderRow={(location) => <ListItem
                            location={location}
                            onPress={this.handleChildPress}
                          />
                        }
                        />
                      </Content>
                  </Container>
    );
  }


}

function filter(arr, text) {
  return arr.filter(element => {
    const matcher = new RegExp(text, 'ig');
      return (matcher.test(element.location) || matcher.test(element.country));
  });
  }

export default ListScreen;
