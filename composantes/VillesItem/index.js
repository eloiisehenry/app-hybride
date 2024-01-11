import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

const VillesItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <LinearGradient colors={['#2B63F3', '#EF62E5']} style={styles.citiesContainer}>
        <View style={styles.cityInfoContainer}>
          <View style={styles.nameAndHour}>
            <Text style={styles.head}>{item.name}</Text>
            <Text style={styles.hour}>{item.hour}</Text>
          </View>
          <Text style={styles.weather}>{item.condition}</Text>
        </View>
        <MaterialCommunityIcons name="heart-plus-outline" size={22} color="white" />
        <Text style={styles.temp}>{item.temperature}°</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default VillesItem;
