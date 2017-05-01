import Expo from 'expo';
import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import data from './data/may2017.json';

class App extends Component {
  render() {
    return (
      <Container>
                      <Content>
                          <Card>
                              <CardItem>
                                <Body>
                                  <Text>
                                    {data[0].country}
                                  </Text>
                                </Body>
                              </CardItem>
                          </Card>
                      </Content>
                  </Container>
    );
  }
}

Expo.registerRootComponent(App);
