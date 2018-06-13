import React, { Component } from 'react';
import { Text, FlatList, ActivityIndicator, Image, View } from 'react-native';
import Styles from './Styles'

class TrafficCams extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }
    
    static navigationOptions = {
        title: "Traffic Cameras"
    };
    
    componentDidMount(){
        return fetch('https://web6.seattle.gov/Travelers/api/Map/Data?zoomId=19&type=2')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.Features,
                }, function(){
                    
                });
        }).catch((error) => {
            console.error(error);
        });
    }

    camType(camArray) {
        if(camArray.Type == "sdot") {
            return  "http://www.seattle.gov/trafficcams/images/"+camArray.ImageUrl;
        } else {
            return "http://images.wsdot.wa.gov/nw/"+camArray.ImageUrl;
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        if(this.state.isLoading) {
            return(
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{flex: 1, backgroundColor: '#D47843'}}>
                <FlatList
                    data = {this.state.dataSource}
                    renderItem = {({item}) =>
                        <View style={Styles.tCam}>
                            <Image
                                source = {{uri: this.camType(item.Cameras[0])}}
                                style = {{height: 200, width: 350}}
                            />
                            <Text>{item.Cameras[0].Description}</Text>
                        </View>
                    }
                    keyExtractor = {(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default TrafficCams;