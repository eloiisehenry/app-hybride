import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './style';

const ProfileImagePicker = ({ onImagePicked, currentImage }) => {

    const selectImage = () => {
        const options = {
            // Vos options ici (quality, mediaType, etc.)
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                onImagePicked(response.uri); // Appelle la fonction callback avec l'URI de l'image
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={selectImage}>
                <Image 
                    source={currentImage ? { uri: currentImage } : require('../../assets/pfp.jpeg')} // Image par défaut ou image sélectionnée
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileImagePicker;
