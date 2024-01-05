// profilStyles.js
import { StyleSheet } from 'react-native';

const profilStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Modifié de 'center' à 'flex-start'
    paddingTop: 130, 
    backgroundColor: 'rgba(31, 31, 31, 1)',
  },
  profileImageContainer: {
    borderRadius: 75, // la moitié de la largeur/hauteur pour un cercle parfait
    width: 150, // la largeur de la vue de fond, plus grande que la photo de profil
    height: 150, // la hauteur de la vue de fond, plus grande que la photo de profil
    alignItems: 'center', // centrer la photo de profil horizontalement
    justifyContent: 'center', // centrer la photo de profil verticalement
    overflow: 'hidden', // assurez-vous que le dégradé ne dépasse pas les bords arrondis
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 70,
  },
  profileName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 10,
    color: 'white',
  },
  editButton: {
    backgroundColor: '#282828',
    padding: 15,
    width: '55%',
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ville: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
    marginTop: 8,
  },
  textVilleFav: {
    color: 'white',
    fontSize: 18,
    marginBottom: 6,
    marginTop: 28,
    alignSelf: 'flex-start',
    marginLeft: 20,
  }
});

export default profilStyles;
