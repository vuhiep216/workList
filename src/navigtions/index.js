import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Todolist from '../screens/Todolist';
import WorkDetail from '../screens//WorkDetail';

const Stack = createStackNavigator();

function  RootNativation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Todolist" component={Todolist} />
                <Stack.Screen name="WorkDetail" component={WorkDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNativation;