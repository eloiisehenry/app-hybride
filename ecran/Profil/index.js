// ProfilePage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { FakeCityConditions } from '../../fakeData/fakeCityConditions';
import FavVillesItem from '../../composantes/FavVillesItem';
import { LinearGradient } from 'expo-linear-gradient';
import { getAuth } from 'firebase/auth';
import profilStyles from './style'; // Importez votre style
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/fireBase';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const auth = getAuth();
  const db = getFirestore();

 useEffect(() => {
    const fetchUserData = async () => {
       const user = auth.currentUser;
       console.log('user', user);
      //  console.log('user.email', user.email);
       if (user) {
         // Ici, nous utilisons l'email de l'utilisateur pour identifier le document
         const userRef = doc(db, 'Users', user.email); // Assurez-vous que 'User' est le nom de votre collection
         const userSnap = await getDoc(userRef);

 
         if (userSnap.exists()) {
           setUserData(userSnap.data());
            console.log('userSnap.data()', userSnap.data());
            console.log('user.email', user.email);
         } else {
           console.log('No such document!');
         }
       }
     };
 
     fetchUserData();
   }, []);

  const handleEditProfile = () => {
    // Mettez ici le code pour la navigation vers la page de modification du profil
    navigation.navigate('ModifProfil');
    console.log('Naviguer vers la page de modification du profil');
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Vous pouvez ici rediriger l'utilisateur vers l'écran de connexion ou effectuer d'autres actions post-déconnexion
      navigation.navigate('Login');
      console.log('User logged out');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
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
      {/* <Text style={profilStyles.profileName}>Spider</Text> */}
      <Text style={profilStyles.profileName}>{userData?.name}</Text>
      {/* <Text style={profilStyles.ville}>Drancy, France</Text> */}
      <Text style={profilStyles.ville}>{userData?.city}</Text>
      <Text style={profilStyles.textVilleFav}>Villes favorites :</Text>
      {/* liste des villes favorites */}
      <FlatList
        data={FakeCityConditions}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          item.id === 1 || item.id === 6 || item.id === 3 ? (
            <FavVillesItem item={item} />
          ) : null
        )}
        ListFooterComponentStyle={{ alignItems: 'center', justifyContent: 'center' }}
        ListFooterComponent={
          <TouchableOpacity onPress={() => navigation.navigate('avCity')}>
            <Text style={profilStyles.voirPlus}>Voir plus . . .</Text>
          </TouchableOpacity>
        }
      />
 {/* boutons modifier profil et deconnexion */}
    <View style={profilStyles.boutContainer}>
      <TouchableOpacity onPress={handleEditProfile} style={profilStyles.editButton}>
        <Text style={profilStyles.editButtonText}>Modifier le profil</Text>
      </TouchableOpacity>

      {/* deconnexion */}

      <TouchableOpacity onPress={handleLogout} style={profilStyles.logOutButton}>
        <Text style={profilStyles.editButtonText}>Deconnexion</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
};

export default ProfilePage;
