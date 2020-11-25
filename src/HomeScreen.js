import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

export default class HomeScreen extends Component {
    constructor() {
        super();
    }


    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                /><Button
                title="FlexBox布局"
                onPress={() => navigation.navigate('FlexBoxScreen')}
            />
            </View>
        );
    }
}

