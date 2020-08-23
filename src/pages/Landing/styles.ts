import { StyleSheet } from 'react-native';
import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#57B2E5',
        justifyContent: 'center',
        padding: 40
    },

    logo: {
        width: '90%',
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 18,
        lineHeight: 30,
        marginTop: 80,
        justifyContent: 'center',
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    signin: {
        backgroundColor: '#E5E5E5',
        marginVertical: 40,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        maxWidth: 240,
        borderRadius: 8,
        resizeMode: 'contain',
        right: '-10%',
        
        
    },

    signinText: {
        fontSize:16,
        fontFamily: 'Archivo_700Bold',
    
    },


});

export default styles;