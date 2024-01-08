import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import mapStyles from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { API_KEY, WEATHER_BASE_URL, LANG, UNITS } from '../../outils/apiConfig'; // Assurez-vous que ces chemins sont corrects
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Map = () => {
  const [searchText, setSearchText] = useState('');
  const [region, setRegion] = useState({
    latitude: 48.8566, // Latitude de Paris
    longitude: 2.3522, // Longitude de Paris
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getLocationAsync = async () => {
      try {
        let location = await Location.geocodeAsync(searchText);
        if (location && location.length > 0) {
          setRegion({
            latitude: location[0].latitude,
            longitude: location[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });

          // Récupération des données météorologiques pour la nouvelle localisation
          const response = await fetch(`${WEATHER_BASE_URL}?lat=${location[0].latitude}&lon=${location[0].longitude}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`);
          const result = await response.json();
          setWeatherData(result);
        }
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    if (searchText) {
      getLocationAsync();
    }
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={mapStyles.mapContainer}>
      <MapView
        style={mapStyles.mapCondition}
        region={region}
        onRegionChange={(newRegion) => setRegion(newRegion)}>
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      <View style={mapStyles.searchContainer}>
        <TextInput
          style={mapStyles.input}
          placeholder="Rechercher une ville"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      {weatherData && (
        <View style={mapStyles.weatherContainer}>
          <View style={mapStyles.column}>
          {/* Première colonne */}
            <Text style={mapStyles.weatherInfo}>
              <MaterialCommunityIcons name="weather-partly-cloudy" style={{ color: 'white' }} size={18} />
              {` ${Math.round(weatherData.main.temp)}°c , ${weatherData.weather[0].description}\n`}
            </Text>
            <Text style={mapStyles.weatherInfo}>
              <MaterialCommunityIcons name="water-outline" style={{ color: 'white' }} size={18} />
              {`       ${weatherData.main.humidity}%\n`}
            </Text>
            <Text style={mapStyles.weatherInfo}>
              <MaterialCommunityIcons name="weather-windy" style={{ color: 'white' }} size={18} />
              {`   ${weatherData.wind.speed} km/h`}
            </Text>
          </View>
          <View style={mapStyles.column}>
          {/* Deuxième colonne */}
            <Text style={mapStyles.weatherInfo}>
              <MaterialCommunityIcons name="thermometer" style={{ color: 'white' }} size={18} />
              {`   ${weatherData.main.feels_like}°c\n`}
            </Text>
            <Text style={mapStyles.weatherInfo}>
              <MaterialCommunityIcons name="speedometer" style={{ color: 'white' }} size={18} />
              {`   ${weatherData.main.pressure} hPa\n`}
            </Text>
            <Text style={mapStyles.weatherInfo}>
              <MaterialCommunityIcons name="eye-outline" style={{ color: 'white' }} size={18} />
              {`   ${weatherData.visibility / 1000} km`}
            </Text>
          {/* ... */}
          </View>
          <View style={mapStyles.column}>
          {/* Troisième colonne */}
          {/* heure en direct */}
          <Text style={mapStyles.weatherInfo}>
              <MaterialCommunityIcons name="clock-time-four-outline" style={{ color: 'white' }} size={18} />
              {`   ${new Date(weatherData.dt * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false })}`}
            </Text>
              <Text style={mapStyles.weatherInfo}>
                <MaterialCommunityIcons name="weather-sunset-up" style={{ color: 'white' }} size={18} />
                {`   ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false })}`}
              </Text>
              <Text style={mapStyles.weatherInfo}>
                <MaterialCommunityIcons name="weather-sunset-down" style={{ color: 'white' }} size={18} />
                {`   ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false })}`}
              </Text>
            </View>
          </View>
        )}

    </View>
  );
};

export default Map;
