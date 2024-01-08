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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { API_KEY, WEATHER_BASE_URL, LANG, UNITS } from '../../outils/apiConfig';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const [cityData, setCityData] = useState([]);
  const cities = ['Paris', 'Drancy', 'Lille'];
  const auth = getAuth();
  const db = getFirestore();

  const fetchWeatherDataForCity = async (city) => {
    try {
      const response = await fetch(`${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`);
      const result = await response.json();
      const currentHour = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
      return {
        name: city, 
        temperature: Math.round(result.main.temp), 
        condition: result.weather[0].description,
        hour: currentHour
      };
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo", error);
      return null;
    }
  };

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
       try {
        const data = await Promise.all(
          cities.map(async city => {
            const response = await fetch(`${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`);
            const result = await response.json();
            const currentHour = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
            return {
              name: city, 
              temperature: Math.round(result.main.temp), 
              condition: result.weather[0].description,
              hour: currentHour
            };
          })
        );
        setCityData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données météo", error);
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
    data={cityData}
    keyExtractor={(item) => item.name}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <FavVillesItem item={item} />
    )}
    ListFooterComponentStyle={{ alignItems: 'center', justifyContent: 'center' }}
    ListFooterComponent={
      <TouchableOpacity onPress={() => navigation.navigate('FavCity')} style={profilStyles.voirPlusButton}>
        <MaterialCommunityIcons name="segment" style={{color: 'white'}} size={40} />
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
