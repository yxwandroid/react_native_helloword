import React, {Component} from 'react';
import {
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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight onPress={() => navigation.navigate('FlexBoxScreen')}>
        <Text>Flex布局</Text>
        </TouchableHighlight>
        </View>
    );
    }
}




