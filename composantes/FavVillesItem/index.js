import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style'; // Import your style
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavVillesItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <LinearGradient colors={['#EF62E5', '#2B63F3']} style={styles.citiesContainer}>
      <View style={styles.cityInfoContainer}>
          <View style={styles.nameAndHour}>
            
            <Text style={styles.head}>{item.name}</Text>
            <Text style={styles.hour}>{item.hour}</Text>
          </View>
      </View>
      <MaterialCommunityIcons name="heart-multiple" size={16} color="white" />
          <Text style={styles.temp}>{item.temperature}°</Text>
      </LinearGradient>

      {/* <View style={styles.seeMoreBout}>
        <Text style={styles.seeMoreText}>Voir plus</Text>
      </View> */}

    </TouchableOpacity>
  );
};

export default FavVillesItem;