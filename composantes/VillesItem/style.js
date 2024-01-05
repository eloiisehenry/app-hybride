import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  citiesContainer: {
    width: '95%',
    height: 140,
    backgroundColor: 'transparent',
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    padding: 22,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cityInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', // Espace entre le contenu en haut et en bas
  },
  nameAndHour: {
    alignItems: 'flex-start',
  },
  hour: {
    color: 'white',
    fontSize: 8,
    // marginBottom: 5, // Ajustez ou retirez selon le besoin de placement
  },
  weather: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'baseline'
  },
  head: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-start', // Assurez-vous que cet élément s'aligne à gauche
  },
  temp: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
