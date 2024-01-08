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
  boutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#282828',
    padding: 15,
    width: '40%',
    height: 40,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 10,
  },
  logOutButton: {
    backgroundColor: '#7F0000',
    padding: 15,
    width: '40%',
    height: 40,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
  },
  boutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 3,
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
  },
  voirPlus: {
    backgroundColor: '#282828',
    padding: 15,
    width: '100%',
    height: 200,
    borderRadius: 30,
    marginBottom: 60,
    marginLeft: 20,
    alignItems: 'center',
    color: 'white',
  },
  closeButtonCont: {
    position: 'absolute', // Position absolue
    top: 10, // Ajustez selon vos besoins
    left: 0, // Ajustez selon vos besoins
    padding: 40, // Ajoute un peu d'espace autour de l'icône pour un meilleur toucher
  },
  
  closeButton: {
    color: 'white',
    fontSize: 20, // Taille de l'icône
  },
});

export default profilStyles;
