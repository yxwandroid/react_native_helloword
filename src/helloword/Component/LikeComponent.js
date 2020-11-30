import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export default class LikeComponent extends Component {
    state = {
        like: 0,
    };


    onPress = () => {
        const {like} = this.state;
        this.setState({
            like: like + 1,
        });

    };

    render() {

        return (
            <View>
                <TouchableOpacity
                    onPress={this.onPress}>
                    <Text>
                        喜欢{this.state.like}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}