// ProfilePage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { FakeCityConditions } from '../../fakeData/fakeCityConditions';
import FavVillesItem from '../../composantes/FavVillesItem';
import { LinearGradient } from 'expo-linear-gradient';
import profilStyles from './style'; // Importez votre style

const ProfilePage = () => {
  const handleEditProfile = () => {
    // Mettez ici le code pour la navigation vers la page de modification du profil
    console.log('Naviguer vers la page de modification du profil');
  };

  return (
    <View style={profilStyles.container}>
     <LinearGradient
    // Les couleurs du dégradé
    colors={['#8E63EC', '#2B63F3']}
    // Le style de la vue de fond
    style={profilStyles.profileImageContainer}
    >
      <Image
      source={require('../../assets/pfp.jpeg')}
      style={profilStyles.profileImage}
      />
    </LinearGradient>
      <Text style={profilStyles.profileName}>Spider</Text>
      <Text style={profilStyles.ville}>Drancy, France</Text>
      <Text style={profilStyles.textVilleFav}>Villes favorites :</Text>
      {/* liste des villes favorites */}
      <FlatList
        data={FakeCityConditions}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          // afficher que les id 1, 2 et 3
          item.id === 1 || item.id === 2 || item.id === 6 || item.id === 3 ? (
            <FavVillesItem item={item} />
          ) : null
        )}
        // ajouter une view a la flatlist
        ListFooterComponent={
          <View style={{ width: 20 }} />
        }
      />

      <TouchableOpacity onPress={handleEditProfile} style={profilStyles.editButton}>
        <Text style={profilStyles.editButtonText}>Modifier le profil</Text>
      </TouchableOpacity>

      {/* Vous pouvez ajouter d'autres informations du profil ici */}
      {/* ... */}

    </View>
  );
};

export default ProfilePage;
