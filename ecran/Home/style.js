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
      width: '80%',
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
    },
    headTemp: {
      color: 'white',
      fontSize: 30,
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    tempNumContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: 30,
      marginBottom: 30,
      fontSize: 50,
      color: 'white',
    },
    largeWhiteText: {
      fontSize: 50,
      color: 'white',
      fontWeight: 'bold',
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
      marginBottom: 10,
    },

    // prevision sur 4 jours
    dayContainer: {
      backgroundColor: 'transparent',
      width: 130,
      height: 130,
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 8,
      marginBottom: 30,
      borderRadius: 20,
    },
  });

  export default homeStyles;