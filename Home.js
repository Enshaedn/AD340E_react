import React, { Component } from 'react';
import { Button, View } from 'react-native';
import Styles from './Styles';

class Home extends Component {
    static navigationOptions = {
        title: "Enshaedn React"
    };
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.container}>
                <Button 
                    onPress={ () => navigate('Cams')}
                    title="Traffic Cameras"
                    color="#D47843"
                />
            </View>
        )
    }
}

export default Home;