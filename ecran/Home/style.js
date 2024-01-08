import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'rgba(31, 31, 31, 1)',
    },
    fullDate: {
      color: 'white',
      fontSize: 10,
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    loading: {
      color: 'white',
      fontSize: 16,
    },
    input: {
      width: '100%',
      height: 50,
      padding: 10,
      marginBottom: 5,
      marginTop: 30,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: '#282828',
      color: 'white',
      fontSize: 18,
      alignSelf: 'center',
    },
    text: {
      color: 'white',
      fontSize: 9,
      marginBottom: 4,

      fontWeight : '500',
    },
    textSun: {
      color: 'white',
      fontSize: 14,
      marginBottom: 8,
      fontWeight : '300',
      paddingTop: 4,
    },
    miniText: {
      color: 'white',
      fontSize: 7,
      marginBottom: 8,
      fontWeight : '500',
    },
    headCity: {
      color: 'white',
      fontSize: 30,
      alignSelf: 'center',
      fontWeight: 'bold',
      marginTop: 10,
    },
    headTemp: {
      color: 'white',
      fontSize: 80,
      alignSelf: 'center',
      fontWeight: '300',
    },
    description: {
      color: 'white',
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: '300',
      marginTop: 10,
    },
    tempNumContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 20,
      marginBottom: 5,
      fontSize: 70,
      color: 'white',
    },
    // temperature dans la journee
    tempContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    tempday: {
      backgroundColor: 'transparent',
      padding: 10,
      marginVertical: 5,
      borderRadius: 25,
      borderColor: '#282828',
      borderWidth: 5,
      width: 90,
      height: 47,
      justifyContent: 'center',
    },
    tempday2: {
      backgroundColor: '#282828',
      padding: 10,
      marginVertical: 8,
      borderRadius: 25,
      width: 90,
      height: 47,
      justifyContent: 'center',
    },
    tempTextContainer: {
      backgroundColor: 'transparent',
      padding: 10,
      marginVertical: 8,
      borderRadius: 20,
    },
    tempText: {
      color: 'white',
      fontSize: 14,
      borderRadius: 20,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 2,
      width: '100%',
      alignSelf: 'center', // Centrer horizontalement
      marginBottom: 10,
    },
    infoItem: {
      flex: 2,
      padding: 7,
      borderRadius: 15,
      alignContent: 'center',
      color: 'white',
      alignItems: 'center', // Centrer verticalement
      margin: 4, // Ajouter un espace de 5 unités entre chaque infoItem
      height: 65,
    },
    sun :{
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 15,
      borderRadius: 20,
      marginTop: 8,
      backgroundColor: '#282828',
      padding: 10,
      marginVertical: 5,
    },
    icon: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 22,
    },
    textWind: {
      color: 'FFD937',
    },


  });

  export default homeStyles;