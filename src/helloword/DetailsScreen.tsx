import React, {Component} from 'react';
import {
    Text, TextInput,
    TouchableHighlight,
    View,
} from 'react-native';


interface Props {
    navigation: any;
}

export default class DetailsScreen extends Component<Props, any> {


    constructor(props) {
        super(props);
    }


    onChangeText(text: string) {
        console.log(text)
        this.setState({
            value: text
        })
    }


    render() {
        const {navigation} = this.props

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableHighlight onPress={() => navigation.navigate('FlexBoxScreen')}>
                    <Text>Flex布局</Text>
                </TouchableHighlight>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.onChangeText(text)}
                />
            </View>
        );
    }
}




