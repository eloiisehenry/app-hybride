import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect} from 'react'
import profilStyles from './style'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { API_KEY, WEATHER_BASE_URL, LANG, UNITS } from '../../outils/apiConfig';
import FavVillesItem from '../../composantes/FavVillesItem';

const FavCity = () => {
    const navigation = useNavigation();
    const [cityData, setCityData] = useState([]);
    const cities = ['Paris', 'Drancy', 'Lille'];

    const handleClose = () => {
      navigation.goBack(); // Retourne à l'écran précédent
    };

  const fetchWeatherDataForCity = async (city) => {
    try {
      const response = await fetch(`${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`);
      const result = await response.json();
      const currentHour = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
      return {
        name: city, 
        temperature: Math.round(result.main.temp), 
        condition: result.weather[0].description,
        hour: currentHour
      };
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await Promise.all(
          cities.map(async city => {
            const response = await fetch(`${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`);
            const result = await response.json();
            const currentHour = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
            return {
              name: city, 
              temperature: Math.round(result.main.temp), 
              condition: result.weather[0].description,
              hour: currentHour
            };
          })
        );
        setCityData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données météo", error);
      }
    };

    fetchWeatherData();
  }, []);
  
    return (
      <View style={profilStyles.container}>
        <TouchableOpacity onPress={handleClose} style={profilStyles.closeButtonCont}>
          <MaterialCommunityIcons name="close-thick" style={profilStyles.closeButton}/>
        </TouchableOpacity>      
        <FlatList
          data={cityData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <FavVillesItem item={item} />}
        />
      </View>
    );
  };
export default FavCity