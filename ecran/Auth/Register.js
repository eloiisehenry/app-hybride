import { KeyboardAvoidingView, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { React,  useState } from 'react';
import { useNavigation } from '@react-navigation/native';// Importez useNavigation
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/fireBase'; // Assurez-vous que ce chemin est correct
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import RadioItem from '../../composantes/RadioItem';
import ProfileImagePicker from '../../composantes/ProfileImagePicker';
import { doc, setDoc } from "firebase/firestore"; // Importez la fonction addDoc
import { db } from '../../services/fireBase'; // Assurez-vous que ce chemin est correct
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [profileImage, setProfileImage] = useState(null); // État pour stocker l'image de profil

    const handleImagePicked = (uri) => { setProfileImage(uri) };


    const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState('Celsius'); // État pour l'unité de température sélectionnée

    const handleSelectTemperatureUnit = (value) => { setSelectedTemperatureUnit(value)};

    const navigation = useNavigation(); // Utilisez useNavigation pour gérer la navigation


    //fonction handleRegister si nécessaire pour la connexion
    const uploadImage = async (imageUri) => {
      const storage = getStorage();
      const imageName = `profileImages/${email}_${new Date().getTime()}`; // Nom unique pour l'image
      const storageRef = ref(storage, imageName);
  
      const response = await fetch(imageUri);
      const blob = await response.blob();
  
      const snapshot = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      return downloadURL;
  };
 
  const handleRegister = async () => {
    try {
        // Création de l'utilisateur
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Logged in with:', userCredentials.user.email);
        navigation.navigate('Home');
  
        // Télécharger l'image et obtenir l'URL
        let profileImageUrl = '';
        if (profileImage) {
          profileImageUrl = await uploadImage(profileImage);
        }
  
        // Create a document reference
        const userDocRef = doc(db, "Users", email);
  
        // Set the document data
        await setDoc(userDocRef, {
            name: name,
            celsius: selectedTemperatureUnit,
            city: city,
            mail: email,
            photo_profil: profileImageUrl,
        });
  
        // Access the document ID
        console.log("Document written with ID: ", userDocRef.id);
    } catch (error) {
        // Gestion des erreurs pour les deux opérations
        console.error("Error in user registration or data addition: ", error);
        alert(error.message);
    }
  };
  
  
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.headContainer}>
            <Image
                source={require("../../assets/icon-weather.png")}
                style={styles.image2}
                resizeMode="contain"
            />
            <Text style={styles.heading}>Welcome !</Text>
            
            </View>
            <Text style={styles.subheading}>Please register to continue</Text>
            <View style={styles.inputContainer}>
                
                <Text style={styles.text}>Name</Text>
                <TextInput
                    placeholder='Name'
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>email</Text>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>mot de passe</Text>
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />

                {/* confirm password */}
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    style={styles.input}
                    secureTextEntry/>

                {/* city */}
                <Text style={styles.text}>City</Text>
                <TextInput
                    placeholder='City'
                    value={city}
                    onChangeText={text => setCity(text)}
                    style={styles.input}/>

                {/* download profil picture */}
              <View style={styles.imageContainer}>
                <Text style={styles.text}>Profile Picture</Text>
                <ProfileImagePicker currentImage={profileImage} onImagePicked={setProfileImage} />
              </View>

                {/* choix unite de temperature */}
              <View style={styles.radioContainer}>
                <Text style={styles.text}>Temperature unit</Text>
                <RadioItem selectedTemperatureUnit={selectedTemperatureUnit} 
                           onSelectTemperatureUnit={handleSelectTemperatureUnit} />
              </View>
            </View>
                
            {/* boutons */}
            <LinearGradient
               colors={['#EF62E5', '#2B63F3']}
                style={styles.buttonContainer}
                 start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                <TouchableOpacity
                onPress={handleRegister}
                style={styles.button}
                >
              
                <Text style={styles.buttonText}>S'inscrire</Text>
                </TouchableOpacity>

            </LinearGradient>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')} // Navigue vers RegisterScreen quand on appuie sur Register
                style={[styles.button, styles.buttonOutline]}
                    >
              <Text style={styles.buttonOutlineText}>Connexion</Text>
            </TouchableOpacity>
            {/* invite */}
            <View style={styles.inviteContainer}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.inviteLink}>Je ne souhaite pas m'authentifier</Text>
                </TouchableOpacity>
            </View>
            
        </KeyboardAvoidingView>
    );
};

export default Register;
