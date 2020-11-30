import {Text, Image, View, StyleSheet} from "react-native";
import React, {Component} from "react";
import LikeComponent from "./Component/LikeComponent";

export default class DemoScreen extends Component {

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>

                <LikeComponent></LikeComponent>
                <Text>image组件使用</Text>
                <Image source={pic} style={{width: 200, height: 120}}/>
                <Image style={{height: 200}} source={require('../images/time.png')}/>
            </View>
        );

    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
