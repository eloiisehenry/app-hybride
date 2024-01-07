// import React, { useState, useEffect } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
// import { styles } from "./style";
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const GuestSignIn = ({ onCitySubmit }) => {
//     const [city, setCity] = useState('');
//     const navigation = useNavigation();

//     const handleSubmit = () => {
//         console.log("onCitySubmit value:", onCitySubmit);

//         try {
//             if (onCitySubmit && typeof onCitySubmit === 'function' && city.trim() !== '') {
//                 onCitySubmit(city);
//                 setCity(''); // Clear the city after submission
//                 navigation.navigate('Home');
//             } else {
//                 console.error("onCitySubmit is not a function or city is empty");
//             }
//         } catch (error) {
//             console.error("Error in handleSubmit:", error);
//         }
//     };

//     console.log("Rendering GuestSignIn with city:", city);

//     return (
//         <View style={styles.container}>
//             <Image
//                 source={require("../assets/icon-weather.png")}
//                 style={styles.image}
//                 resizeMode="contain"
//             />
//             <Text style={styles.title}>Connexion en tant qu'invité</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Entrez une ville"
//                 value={city}
//                 onChangeText={setCity}
//             />

//             <LinearGradient
//                 colors={['#EF62E5', '#2B63F3']}
//                 style={styles.buttonContainer}
//                 start={{ x: 0, y: 0.5 }}
//                 end={{ x: 1, y: 0.5 }}
//             >
//                 <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                     <Text style={styles.buttonText}>Valider</Text>
//                 </TouchableOpacity>
//             </LinearGradient>
//         </View>
//     );
// };

// export default GuestSignIn;
