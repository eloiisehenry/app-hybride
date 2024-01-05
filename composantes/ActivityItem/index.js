import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import React from 'react'

const ActivityItem = ({item}) => {
  return (
    <LinearGradient colors={['#EF62E5', '#2B63F3']} style={styles.citiesContainer}>
      <View style={styles.cityInfoContainer}>
        <Text style={styles.head}>{item.title}</Text>
        <Text style={styles.weather}>{item.weather}</Text>
        <Text style={styles.temp}>{item.temperature}°</Text>
      </View> 
    </LinearGradient>
  )
}

export default ActivityItem;