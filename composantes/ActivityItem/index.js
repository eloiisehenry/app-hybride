import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import React from 'react';

const getTimeLabel = (partOfDay) => {
  switch (partOfDay) {
    case 'Matin':
      return '08:00'; // Heure représentative du matin
    case 'Midi':
      return '12:00'; // Heure représentative de midi
    case 'Après-midi':
      return '16:00'; // Heure représentative de l'après-midi
    case 'Soirée':
      return '21:00'; // Heure représentative de la soirée
    default:
      return '';
  }
};

const ActivityItem = ({ item }) => {
  const timeLabel = getTimeLabel(item.partOfDay);

  return (
    <LinearGradient colors={['#EF62E5', '#2B63F3']} style={styles.citiesContainer}>
      <View style={styles.cityInfoContainer}>
        <Text style={styles.head}>
          {timeLabel}
        </Text>
        <Text style={styles.weather}>{item.weather[0].description}</Text>
        <Text style={styles.temp}>{Math.round(item.temp)}°</Text>
      </View>
    </LinearGradient>
  );
};


export default ActivityItem;
