import React from 'react';
import { View, Image,Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import logo2 from '../../assets/images/images/logo2.png';
import backIcon from '../../assets/images/images/icons/back.png';



import styles from './styles';

interface PageHeaderProps {
    title: String;
}


const PageHeader: React.FC<PageHeaderProps> = ({ title}) => {

    function handleGoBack () {
    
    };

    return (
        <View style={styles.container}>
          <View style ={styles.topBar}> 
             <BorderlessButton onPress={handleGoBack}>
                
             </BorderlessButton>
             <Image source={logo2} style={styles.logo} />
             </View>
            <Text style={styles.title}> Sua plataforma de buscar
                                        profesores em qualquer lugar. </Text>
         </View>
       
    )
}

export default PageHeader;