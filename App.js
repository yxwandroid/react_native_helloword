import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './src/helloword/DetailsScreen';
import FlexBoxScreen from './src/helloword/FlexBoxScreen';
import HomeScreen from './src/HomeScreen';
import DemoScreen from './src/helloword/DemoScreen';
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
