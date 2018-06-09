import React, { Component } from 'react';
import { Alert, Button, Text, ToolbarAndroid, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
    <View>
      <View>
        <ToolbarAndroid
            title="Enshaedn React"
            titleColor="#0000ff"/>
      </View>
      <View>
        <Text>React Native is awful.</Text>
      </View>
      <View>
        <Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
      </View>
    </View>
    );
  }
}