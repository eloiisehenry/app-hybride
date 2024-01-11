
import {imgStyles} from './style'
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const profileImages = [
  require("../../assets/pfp.jpeg"),
  
  require("../../assets/pfp2.jpeg"),
  require("../../assets/pfp1.jpeg"),
  require("../../assets/pfp4.jpeg"),
  require("../../assets/pfp5.jpeg"),
  require("../../assets/pfp3.jpeg"),
  

];

const ProfileSelector = ({ onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (image) => {
    setSelectedImage(image);
    onSelect(image);
  };

  return (
    <View style={imgStyles.container}>
      {profileImages.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => handleSelect(image)}>
          <Image source={image} style={image === selectedImage ? imgStyles.selectedImage : imgStyles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileSelector;