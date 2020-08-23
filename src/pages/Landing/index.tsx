import React from 'react';
import { View, Image,Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import logoImage from '../../assets/images/images/frame00.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'


function Landing() {

    const { navigate } = useNavigation();

    function handlerNavigateToSignIn() {
        navigate('SignIn');
    }
    
    return (
     
        <View style={styles.container} >
             <Image source={logoImage} style={styles.logo}/>
             <Text style={styles.title}>
                 Seja bem-vindo, {'\n'}
                 <Text style={styles.titleBold}> A qui é sua plataforma de buscar</Text>

             </Text>

             <TouchableOpacity 
             onPress={handlerNavigateToSignIn}
             style={styles.signin}
             >
                 <Text style ={styles.signinText}>Sign in</Text>
             </TouchableOpacity>
        </View>
     ); 

}

export default Landing;
