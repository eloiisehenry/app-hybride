import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style'; // Import your style

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
          <Text style={styles.temp}>{item.temperature}°</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FavVillesItem;