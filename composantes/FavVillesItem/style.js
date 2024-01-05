import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  citiesContainer: {
    backgroundColor: 'transparent',
    width: 100,
    height: 180,
    padding: 10,
    marginVertical: 28,
    marginHorizontal: 8,
    borderRadius: 20,
    borderColor: '#282828',
    borderWidth: 10,
    },
  cityInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', // Espace entre le contenu en haut et en bas
  },
  hour: {
    color: 'white',
    fontSize: 8,
    marginBottom: 8, // Ajustez ou retirez selon le besoin de placement
    alignSelf: 'center',
  },
  head: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',// Assurez-vous que cet élément s'aligne à gauche
    alignSelf: 'center',
    marginTop: 28,
  },
  temp: {
    color: 'white',
    fontSize: 35,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 18,
  },
});
