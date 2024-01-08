import { KeyboardAvoidingView, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { React,  useState } from 'react';
import { useNavigation } from '@react-navigation/native';// Importez useNavigation
import { updatePassword } from 'firebase/auth';
import { auth } from '../../services/fireBase'; // Assurez-vous que ce chemin est correct
import profilStyles from './style';
import { LinearGradient } from 'expo-linear-gradient';
import RadioItem from '../../composantes/RadioItem';
import ProfileSelector from '../../composantes/ProfileSelector';
import { doc, setDoc, deleteDoc } from "firebase/firestore"; // Importez la fonction addDoc
import { db } from '../../services/fireBase'; // Assurez-vous que ce chemin est correct
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ModifProfil = () => {
  const [newName, setName] = useState(''); // Ajout de l'état pour le nouveau nom
  const [newPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newCity, setCity] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState('Celsius');
  const navigation = useNavigation();

  const handleProfileSelect = (selectedImage) => { setProfileImage(selectedImage)};

  const handleSelectTemperatureUnit = (value) => {
            setSelectedTemperatureUnit(value);
        };

  const handleClose = () => {
    navigation.goBack(); // Retourne à l'écran précédent
      };
    
  const uploadImage = async (imageUri) => {
      const imageName = `profileImages/${auth.currentUser.email}_${new Date().getTime()}`;
      const storageRef = ref(storage, imageName);

      const response = await fetch(imageUri);
      const blob = await response.blob();

      const snapshot = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
  };

  const handleModifier = async () => {
      try {
          if (newPassword === confirmPassword) {
              await updatePassword(auth.currentUser, newPassword);
          }

          let profileImageUrl = '';
          if (profileImage) {
              profileImageUrl = await uploadImage(profileImage);
          }

          const userDocRef = doc(db, "Users", auth.currentUser.email);
          await setDoc(userDocRef, {
              name: newName,
              celsius: selectedTemperatureUnit === 'Celsius',
              city: newCity,
              email: auth.currentUser.email,
              photo_profil: profileImageUrl,
          });

          navigation.navigate('ProfilePage');
      } catch (error) {
          console.error("Erreur lors de la mise à jour: ", error);
      }
  };


    return (
        <KeyboardAvoidingView style={profilStyles.container} behavior="padding">
          <TouchableOpacity onPress={handleClose} style={profilStyles.closeButtonCont}>
            <MaterialCommunityIcons name="close-thick" style={profilStyles.closeButton}/>
          </TouchableOpacity>
            <View style={profilStyles.headContainer}>
              <Image
                source={require("../../assets/icon-weather.png")}
                style={profilStyles.image2}
                resizeMode="contain"
              />
              <Text style={profilStyles.heading}>Modifier le profil</Text>
            </View>
      
            {/* Affichage de l'email de l'utilisateur */}
            <Text style={profilStyles.subheading}>Email Actuel: {auth.currentUser.email}</Text>

            <View style={profilStyles.inputContainer}>
                {/* Nom */}
                <TextInput
                    placeholder='Name'
                    placeholderTextColor='#888888'
                    value={newName}
                    onChangeText={text => setName(text)}
                    style={profilStyles.input}
                />
                {/* password */}
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#888888'
                    value={newPassword}
                    onChangeText={text => setPassword(text)}
                    style={profilStyles.input}
                    secureTextEntry
                />

                {/* confirm password */}
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor='#888888'
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    style={profilStyles.input}
                    secureTextEntry/>
              </View>
                {/* update profil picture */}
                <View style={profilStyles.imageContainer}>
                    <Text style={profilStyles.text}>Profile Picture</Text>
                    <ProfileSelector onSelect={handleProfileSelect} />
                </View>

                {/* choix unite de temperature */}
              <View style={profilStyles.radioContainer}>
                <Text style={profilStyles.text}>Temperature unit</Text>
                <RadioItem selectedTemperatureUnit={selectedTemperatureUnit} 
                           onSelectTemperatureUnit={handleSelectTemperatureUnit} />
              </View>
            
                
            {/* boutons */}
            <LinearGradient
               colors={['#EF62E5', '#2B63F3']}
                style={profilStyles.buttonContainer}
                 start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                <TouchableOpacity
                onPress={handleModifier}
                style={profilStyles.button}
                >
              
                <Text style={profilStyles.buttonText}>Modifier</Text>
                </TouchableOpacity>

            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default ModifProfil;
