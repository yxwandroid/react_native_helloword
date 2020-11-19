import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
},{
    initialRouteName:"Home"
});

class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}

export default App;
