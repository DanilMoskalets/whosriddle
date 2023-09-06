import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CardDetailsScreen, HomeScreen} from "../screen";

const HomeStack = createStackNavigator();
export const HomeStackNavigation = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
            <HomeStack.Screen name="CardDetails" component={CardDetailsScreen} options={{headerShown: false}}/>
        </HomeStack.Navigator>
    );
}
