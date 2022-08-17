import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlexBoxScreen from './src/helloword/FlexBoxScreen';
import HomeScreen from './src/HomeScreen';
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FlexBoxScreen">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="FlexBoxScreen" component={FlexBoxScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
