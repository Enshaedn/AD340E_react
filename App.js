import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends Component {
    static navigationOptions = {
        title: "Enshaedn React"
    };
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={ () => navigate('Cams')}
                    title="Traffic Cameras"
                />
            </View>
        )
    }
}

const AppNav = StackNavigator({
    Home: { screen: Home },
    Cams: { screen: TrafficCams},
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ef7015'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
});

export default class App extends Component {
  render() {
    return <AppNav />;
  }
}

class TrafficCams extends Component {
    render() {
        return (
            <View>
            <Text>Screen two!</Text>
            </View>
        );
    }
}