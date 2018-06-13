import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import TrafficCams from './TrafficCams';

export default class App extends Component {
  render() {
    return <AppNav />;
  }
}

const AppNav = StackNavigator({
    Home: { screen: Home },
    Cams: { screen: TrafficCams},
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#108767'
            },
            headerTintColor: '#ddd',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
});