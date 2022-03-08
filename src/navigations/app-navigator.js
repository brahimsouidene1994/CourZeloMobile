import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesScreen from '_scenes/courses';
import EBesinessScreen from '_scenes/e-besiness';
import HomeScreen from '_scenes/home';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Courses" component={CoursesScreen} />
                <Tab.Screen name="E-besiness" component={EBesinessScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;