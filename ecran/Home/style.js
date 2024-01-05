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
      fontSize: 20,
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
      fontSize: 16,
      marginBottom: 5,

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
      fontSize: 50,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    tempNumContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 30,
      marginBottom: 10,
      fontSize: 70,
      color: 'white',
    },
    // temperature du jour, hier, demain
    tempContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 10,
      borderRadius: 20,
      marginTop: 28,
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
      margin: 10,
      width: '100%',
      alignSelf: 'center', // Centrer horizontalement
    },
    infoItem: {
      flex: 2,
      padding: 10,
      borderRadius: 15,
      alignContent: 'center',
      color: 'white',
      alignItems: 'center', // Centrer verticalement
      margin: 3, // Ajouter un espace de 5 unités entre chaque infoItem
    },
    sun :{
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 10,
      borderRadius: 20,
      marginTop: 28,
      backgroundColor: '#282828',
      padding: 10,
      marginVertical: 8,
    },
    icon: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 28,
    },
    textWind: {
      color: 'FFD937',
    },


  });

  export default homeStyles;