import { KeyboardAvoidingView, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { React,  useState } from 'react';
import { useNavigation } from '@react-navigation/native';// Importez useNavigation
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/fireBase'; // Assurez-vous que ce chemin est correct
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import RadioItem from '../../composantes/RadioItem';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [profileImage, setProfileImage] = useState(null); // État pour stocker l'image de profil

    const selectImage = () => {
      const options = {
        // Vos options ici (quality, mediaType, etc.)
      };
    
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setProfileImage(response.uri); // Stocke l'URI de l'image
        }
      });
    };

    const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState('Celsius'); // État pour l'unité de température sélectionnée

    const handleSelectTemperatureUnit = (value) => {
        setSelectedTemperatureUnit(value);
    };

    const navigation = useNavigation(); // Utilisez useNavigation pour gérer la navigation

    // Ajoutez ici la fonction handleRegister si nécessaire pour la connexion
    const handleRegister = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            navigation.navigate('Home')
            console.log(('Logged in with:', user.email));
        })
        .catch(error => alert(error.message));
    }
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
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={selectImage}>
                <Text style={styles.buttonText}>Download profil picture</Text>

                </TouchableOpacity>
                </View>
            </View> 
                {/* choix unite de temperature */}
                
                <Text style={styles.text}>Temperature unit</Text>
                <RadioItem selectedTemperatureUnit={selectedTemperatureUnit} 
                           onSelectTemperatureUnit={handleSelectTemperatureUnit} />
                
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
              
                <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => navigation.navigate('Login')} // Navigue vers RegisterScreen quand on appuie sur Register
                style={[styles.button, styles.buttonOutline]}
                    >
                <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default Register;
