import React from 'react';
import { View, Image,Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import landing from '../../assets/images/images/frame00.png';
import { RectButton } from 'react-native-gesture-handler';


function Landing() {
    
    return (
     
        <View style={styles.container} >
             <Image source={landing} style={styles.banner}/>
             <Text style={styles.title}>
                 Seja bem-vindo, {'\n'}
                 <Text style={styles.titleBold}> A qui é sua plataforma de buscar</Text>

             </Text>

             <RectButton style={styles.signin}>
                 <Text style ={styles.signinText}>Sign in</Text>
             </RectButton>
        </View>
     ); 

}

export default Landing;
