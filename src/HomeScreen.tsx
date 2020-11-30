import React, {Component} from 'react';
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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
                <TouchableHighlight style={styles.buttonStyle}
                                    onPress={() => navigation.navigate('DetailsScreen')}>
                    <Text style={styles.textStyle}>详情</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonStyle} onPress={() => navigation.navigate('FlexBoxScreen')}>
                    <Text style={styles.textStyle}>Flex布局</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonStyle} onPress={() => navigation.navigate('DemoScreen')}>
                    <Text style={styles.textStyle}>DemoScreen</Text>
                </TouchableHighlight>
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


