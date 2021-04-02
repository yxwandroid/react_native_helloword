import React, {Component, Fragment, useRef} from 'react';
import {
    StyleSheet,
    Animated,
    View,Text
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
                <FadeInView style={{width: 250, height: 100, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // 透明度初始值设为0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim, {toValue: 1,duration: 1000,useNativeDriver:true}
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}
