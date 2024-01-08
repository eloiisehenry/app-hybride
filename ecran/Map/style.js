// style.js

import { StyleSheet } from 'react-native';

const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1F1F1F',
      },
      input: {
        width: '100%',
        height: 50,
        padding: 10,
        marginBottom: 5,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 20,
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        backgroundColor: '#282828',
      },
      searchContainer: {
        position: 'absolute',
        top: 20, // Adjust the top position as needed
        left: 10, // Adjust the left position as needed
        right: 10,
        backgroundColor: 'transparent', // Set to 'transparent' or remove this line
        borderRadius: 5,
        padding: 10,
      },
      mapContainer: {
        flex: 1,
      },
      mapCondition: {
        flex: 9,
      },
      weatherContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#282828',
        padding: 14,
      },
      column: {
        flex: 1, // Donne une largeur égale à chaque colonne
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around', // Espacement uniforme entre les éléments
      },
      weatherInfo: {
        color: '#e0e0e0',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20, // Ajustez si nécessaire pour un espacement uniforme
      },
});

export default mapStyles;
