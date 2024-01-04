// ProfilePage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import profilStyles from './style'; // Importez votre style

const ProfilePage = () => {
  const handleEditProfile = () => {
    // Mettez ici le code pour la navigation vers la page de modification du profil
    console.log('Naviguer vers la page de modification du profil');
  };

  return (
    <View style={profilStyles.container}>
      <Image
      // source image dans assets
        source={require('../../assets/pfp.jpeg')}
        style={profilStyles.profileImage}
      />
      <Text style={profilStyles.profileName}>Spider</Text>

      <TouchableOpacity onPress={handleEditProfile} style={profilStyles.editButton}>
        <Text style={profilStyles.editButtonText}>Modifier le profil</Text>
      </TouchableOpacity>

      {/* Vous pouvez ajouter d'autres informations du profil ici */}
      {/* ... */}

    </View>
  );
};

export default ProfilePage;
