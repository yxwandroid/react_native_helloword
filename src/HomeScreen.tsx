import React, {Component, Fragment, useRef} from 'react';
import {
    StyleSheet,
    Animated,
    View, Text
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
            <View style={{}}>
                <View style={{flexDirection: "column"}}>
                    <View style={{alignItems: 'flex-end',}}>
                        <Text style={{
                            width: 100,
                            marginBottom: 10,

                            backgroundColor: "#ff22ff",
                            height: 60
                        }}>niaho </Text>
                    </View>

                    <View style={{alignItems: "flex-end"}}>
                        <Text style={{height: 20, backgroundColor: "#992277"}}>2 </Text>
                    </View>

                    <View style={{alignItems: 'center',}}>
                        <Text style={{height: 26, backgroundColor: "#002277"}}>niaho </Text>
                    </View>

                    <View style={{alignItems: "center"}}>
                        <Text style={{height: 24, backgroundColor: "#009977"}}>niaho </Text>
                    </View>

                </View>
            </View>
        )
    }
}

