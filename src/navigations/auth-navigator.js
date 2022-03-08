import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '_scenes/login';
import SignUpScreen from '_scenes/signup';
import ResetPwdScreen from '_scenes/resetpwd';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign up" component={SignUpScreen} />
                <Stack.Screen name="Reset" component={ResetPwdScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AuthNavigator;