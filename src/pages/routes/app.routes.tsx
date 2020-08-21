import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashoard from '../Dashboard';
const AppStack = createStackNavigator ();

const AuthRoutes: React.FC = () => (

    <AppStack.Navigator> 
        <AppStack.Screen name="Dashoard" component={Dashoard} />
    </AppStack.Navigator>

);

export default AuthRoutes;
