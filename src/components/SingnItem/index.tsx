import React, { useState } from 'react';
import { View, Text, CheckBox,Platform } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




function SigninItem() {
    
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isSelected, setSelection] = useState(false);
    const  {goBack} = useNavigation ();

    function handlerNavigationGoback() {
        goBack();
    }
    return(
        <View  style={styles.container}>
            <View style={styles.profile}>
        </View>

        <View style={styles.profileInfo} >
            <Text style = {styles.login}>Fazer login</Text>
            <Text style = {styles.conta}>Criar conta</Text>
        </View>

        <View style={styles.email}>
                <Text style={styles.lebel} ></Text>
                <TextInput 
                    style={styles.input}
                    placeholder={'Email'}
                
                />

                <View style={styles.passwor}>
                <Text style={styles.lebel} ></Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder={'password'}
                />
        </View>
            <View style={styles.configSenha} >
                <CheckBox 
                    style={{ width: 20, height: 20, borderBottomColor: '#aaa'}}
                />
               
                <Text style = {styles.lembraSenha}>Lembrar-me</Text>
                <Text style = {styles.esqueciSenha}>Esqueci minha senha</Text>
            </View>
        </View>

        <RectButton onPress={handlerNavigationGoback} style={styles.okButton}>
             <Text style= {styles.okButtonText}>Entar</Text>

         </RectButton>
    </View>
    
 )
}

export default SigninItem;
