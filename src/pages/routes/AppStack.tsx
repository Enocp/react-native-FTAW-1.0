import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../../pages/Landing';
import SignIn from '../../pages/Signin'
import StudyTabs from './StudyTabs';

const { Navigator, Screen }  = createStackNavigator();

function AppStack() {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="SignIn" component={SignIn} />
                <Screen name="Stydy" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );

}

export default AppStack;

