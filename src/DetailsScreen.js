import React, {Component} from 'react';
import {
    View,
    Text, Button,
} from 'react-native';

export default class DetailsScreen extends Component {
    constructor() {
        super();
    }


    goMyPage() {
        const {navigation} = this.props;
        navigation.navigate('Details');
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.goMyPage()}
                />
            </View>
        );
    }
}




