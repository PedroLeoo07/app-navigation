import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackScreen from '../pages/StackScreen';
import Stack2 from "../pages/Stack2";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName="Stack Screen">
            <Stack.Screen name="Stack Screen" component={StackScreen} />
            <Stack.Screen name="Stack 2" component={Stack2} />
        </Stack.Navigator>
    );
}