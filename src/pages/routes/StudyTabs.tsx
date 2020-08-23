
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../../pages/Signin';

const { Navigator, Screen } = createBottomTabNavigator(); 

function StudyTabs() {

return (
<Navigator
    tabBarOptions ={{
        style: {
            elvation: 0,
            shadowOpacity: 0,
            height : 64,
        },

        tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        
    }}
>

</Navigator>
)
}

export default StudyTabs;