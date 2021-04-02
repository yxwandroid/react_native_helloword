import React, {Component, Fragment} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';


interface Props {
    navigation: any;
}

export default class HomeScreen extends Component<Props, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={{flex: 1, flexDirection: "row", alignItems: 'flex-start',}}>
                <View>
                    <Text style={{backgroundColor: "red", margin: 20,}}>hello 1</Text>
                    <View style={{flexDirection: "row", backgroundColor: "blue"}}>
                        <Text>hello fragment</Text>
                    </View>


                </View>
                <View>
                    <Text style={{margin: 20, backgroundColor: "red"}}>hello 1</Text>
                    <View style={{backgroundColor: "blue"}}>
                        <Text>hello fragment</Text>
                    </View>


                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    buttonStyle: {
        margin: 5,
        backgroundColor: '#ffffff',
    },

    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#ffff77',

    },

});


