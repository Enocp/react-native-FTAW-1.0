import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        padding: 40,
        backgroundColor: '#57B2E5',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
       
    },

    logo: {
        
        resizeMode: 'contain',
        padding:40,
    },

    topBar: {
       alignItems: 'center'
    },

    title: {
        
        fontFamily: 'Archivo_400Regular',
        color: '#FFF',
        fontSize: 13,
        elevation: 5,

    },
});

export default styles;