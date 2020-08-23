import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import SigninItem from '../../components/SingnItem';

function SignIn () {
    return (
    
        <View style={ styles.container} >
            <PageHeader />
            
        <SigninItem />
        </View>
    )

}

export default SignIn;