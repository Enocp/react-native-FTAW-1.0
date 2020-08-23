import { StyleSheet, Dimensions }  from 'react-native';

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container : {
        borderStartWidth: 1,
        marginBottom: 16,
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    profileInfo: {
        flexDirection: 'row',
        marginLeft: 16,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    login: {
        fontFamily: 'Poppins_400Regular',
        color: '#32264d',
        fontSize: 24,
    },
    conta : {
        flexDirection: 'row',
        fontFamily: 'Poppins_400Regular',
        marginTop: 4,
        left: '-10%',
        color: '#57B2E5'
    },

    configSenha: {
        flexDirection: 'row',
        marginLeft: 16,
        justifyContent: 'space-between',
        overflow: 'hidden',
        padding: 24,
  
    },

    lembraSenha: {
       fontFamily: 'Poppins_400Regular',
        marginTop: 4,
        color: '#9C98A6'
    },

    esqueciSenha: {
        flexDirection: 'row',
        fontFamily: 'Poppins_400Regular',
        marginTop: 4,
     
        color: '#9C98A6',
        marginLeft: 16,
       
    },

    input: {
        height: 54,
        borderTopEndRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginLeft: 16,
        backgroundColor: "#FFF",
        marginBottom: 8,
        marginTop: 4,
    },

    email: {
        color: '#9C98A6',
        marginLeft: 10,
        padding: 10,
    },

    lebel: {
        color: '#9C98A6',
        
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#DCDCE5',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
        marginBottom: 8,
        width: 380,
        left: 18,
    },


    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },

});

export default styles;