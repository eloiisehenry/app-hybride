import { KeyboardAvoidingView, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { React,  useState } from 'react';
import { useNavigation } from '@react-navigation/native';// Importez useNavigation
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/fireBase'; // Assurez-vous que ce chemin est correct
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Utilisez useNavigation pour gérer la navigation

    // Ajoutez ici la fonction handleLogin si nécessaire pour la connexion
    const handleLogin = () => {
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
            <Image
                source={require("../../assets/icon-weather.png")}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.heading}>Welcome !</Text>
            <Text style={styles.subheading}>Veuillez vous connecter</Text>
            <View style={styles.inputContainer}>

                <TextInput
                    placeholder='Email'
                    placeholderTextColor='#888888'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#888888'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>   

            {/* boutons */}
        <View style={styles.buttonContainer}>
            <LinearGradient
               colors={['#EF62E5', '#2B63F3']}
                style={styles.button}
                 start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                <TouchableOpacity onPress={handleLogin} >
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>

            </LinearGradient>
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={[styles.button, styles.buttonOutline]}
                    >
              <Text style={styles.buttonOutlineText}>Inscription</Text>
            </TouchableOpacity>
        </View>
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

export default Login;
