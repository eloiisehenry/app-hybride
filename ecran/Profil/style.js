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

 
  // croix fermer la page fav
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

  // head 
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
    marginTop: 28,
    marginBottom: 10,
    color: 'white',
  },

    // text villes fav
    ville: {
      color: 'white',
      fontSize: 18,
      marginBottom: 1,
    },
    textVilleFav: {
      color: 'white',
      fontSize: 18,
      marginBottom: 6,
      marginTop: 28,
      alignSelf: 'flex-start',
      marginLeft: 20,
    },

  // bouton
  boutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    margin: 10,
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


  // voir plus
  voirPlusButton: {
    backgroundColor: '#282828',
    padding: 15,
    width: 90,
    height: 180,
    borderRadius: 20,
    marginBottom: 45,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  voirPlusText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    alignContent: 'center',
  },

  
  // style modifProfil.js

  // head

headContainer: {
  width: '80%',
  marginBottom: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
},
heading: {
  color : 'white',
  fontSize: 20,
  fontWeight: '700',
  marginBottom: 5
},
subheading: {
  color : 'white',
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 5,
  marginTop: 35
},
  image2: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },

// input
inputContainer: {
    width: '75%',
    marginBottom: 20,
},
input: {
    backgroundColor: '#282828',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 16,
    color: 'white',

},

// bouton
buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 18,
},
button: {
    backgroundColor : 'transparent',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
},

// pfp
image2: {
  width: 120,
  height: 120,
  marginBottom: 5,
  marginTop: 5,
  alignSelf: 'flex-start'
},
imageContainer: {
  width: '100%',
  marginTop: 30,
  flexDirection: "column",
  justifyContent: 'space-between',
  alignItems: 'center'
},
text: {
    color : 'white',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    marginTop: 5

},
// radio
radioContainer: {
  width: '100%',
  marginTop: 20,
  marginBottom: 20,
  flexDirection: "column",
  justifyContent: 'space-between',
  alignItems: 'center'
  
},
radioText: {
  color : 'white',
  fontSize: 16,
  fontWeight: '400',
  marginBottom: 5,
  marginTop: 5
},
});

export default profilStyles;
