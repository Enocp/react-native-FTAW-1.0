import 'react-native-gesture-handler';

import React  from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create ({
    container: {flex: 1, justifyContent: 'center'},
});

const SignIn: React.FC = () => (
    
     <View>
         <Button title="Sign in" onPress={() => {}} />
     </View>
);
export default SignIn