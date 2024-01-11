import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  citiesContainer: {
    backgroundColor: 'transparent',
    width: 110,
    height: 130,
    padding: 10,
    marginVertical: 28,
    marginHorizontal: 8,
    borderRadius: 30,
    borderColor: '#282828',
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    },
  cityInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', // Espace entre le contenu en haut et en bas
  },
  weather: {
    color: 'white',
    fontSize: 12,
    marginBottom: 8, // Ajustez ou retirez selon le besoin de placement
    alignSelf: 'center',
  },
  head: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',// Assurez-vous que cet élément s'aligne à gauche
    alignSelf: 'center',
    marginTop: 1,
  },
  temp: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    alignSelf: 'center',
  },
});