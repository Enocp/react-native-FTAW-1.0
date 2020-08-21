import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#57B2E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
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

});

export default styles;