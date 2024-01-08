import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import profilStyles from './style';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ModifProfil = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack(); // Retourne à l'écran précédent
  };

  return (
    <View style={profilStyles.container}>
      <TouchableOpacity onPress={handleClose} style={profilStyles.closeButtonCont}>
        <MaterialCommunityIcons name="close-thick" style={profilStyles.closeButton}/>
      </TouchableOpacity>
      <Text style={profilStyles.ville}>modifProfil</Text>
    </View>
  );
};

export default ModifProfil;