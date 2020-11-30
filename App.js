import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './src/helloword/DetailsScreen';
import FlexBoxScreen from './src/helloword/FlexBoxScreen';
import { StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import HomeScreen from './src/HomeScreen';
import DemoScreen from './src/helloword/DemoScreen';


// function HomeScreen({navigation}) {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
//             <TouchableHighlight style={styles.buttonStyle}
//                                 onPress={() => navigation.navigate('DetailsScreen')}>
//                 <Text style={styles.textStyle}>详情</Text>
//             </TouchableHighlight>
//             <TouchableHighlight style={styles.buttonStyle} onPress={() => navigation.navigate('FlexBoxScreen')}>
//                 <Text style={styles.textStyle}>Flex布局</Text>
//             </TouchableHighlight>
//
//             <TouchableHighlight style={styles.buttonStyle} onPress={() => navigation.navigate('DemoScreen')}>
//                 <Text style={styles.textStyle}>DemoScreen</Text>
//             </TouchableHighlight>
//         </View>
//     );
// }

//
// const styles = StyleSheet.create({
//     buttonStyle: {
//         margin: 5,
//         backgroundColor: '#ffffff',
//     },
//
//     textStyle: {
//         fontSize: 20,
//         textAlign: 'center',
//         padding: 10,
//         backgroundColor: '#ffff77',
//
//     },
//
// });


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
                <Stack.Screen name="FlexBoxScreen" component={FlexBoxScreen}/>
                <Stack.Screen name="DemoScreen" component={DemoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
