import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import homeStyles from './style';
import { FakeActivity } from '../../fakeData/fakeActivity';
import ActivityItem from '../../composantes/ActivityItem';

import { API_KEY, WEATHER_BASE_URL, LANG, UNITS } from '../../outils/apiConfig';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState([]);

  const generateFakeForecasts = (currentWeather) => {
    if (!currentWeather || !currentWeather.main) {
      return [];
    }
    
    const morningForecast = { ...currentWeather, temp: currentWeather.main.temp_min, partOfDay: 'Matin' };
    const noonForecast = { ...currentWeather, temp: (currentWeather.main.temp_min + currentWeather.main.temp_max) / 2, partOfDay: 'Midi' };
    const afternoonForecast = { ...currentWeather, temp: currentWeather.main.temp_max, partOfDay: 'Après-midi' };
    const eveningForecast = { ...currentWeather, temp: (currentWeather.main.temp_min + currentWeather.main.temp_max) / 2, partOfDay: 'Soirée' };
  
    return [morningForecast, noonForecast, afternoonForecast, eveningForecast];
  };

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      if (city) {
        setIsLoading(true);
        try {
          const todayUrl = `${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}&lang=${LANG}&units=${UNITS}`;
          const todayResponse = await fetch(todayUrl);
          const todayData = await todayResponse.json();

          setWeatherInfo(todayData);
          setForecastData(generateFakeForecasts(todayData));
        } catch (error) {
          console.error('Erreur lors de la récupération des données météo', error);
        }
        setIsLoading(false);
      }
    };

    fetchWeatherInfo();
  }, [city]);

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderItem = ({ item }) => (
    <ActivityItem item={item} />
  );
  
  return (
    <View style={homeStyles.container}>
      <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
        <TextInput
          style={homeStyles.input}
          placeholder="Entrez le nom de la ville"
          value={city}
          onChangeText={setCity}
        />
        <Text style={homeStyles.headCity}>{weatherInfo ? weatherInfo.name : ''}</Text>
        <Text style={homeStyles.fullDate}>{formatDate(new Date())}</Text>
      </View>
  
      {isLoading ? (
        <Text style={homeStyles.loading}>Chargement...</Text>
      ) : (
        weatherInfo ? (
          <View>
            <View style={homeStyles.tempContainer}>
              {weatherInfo.main && (
                <><View style={homeStyles.tempday2}>
                    <Text style={homeStyles.tempText}>
                      <MaterialCommunityIcons name="thermometer-chevron-down" style={{ color: 'white' }} size={18} />{`  ${Math.round(weatherInfo.main.temp_min)} ° c`}
                    </Text>
                  </View><LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempday}>
                      <Text style={homeStyles.tempText}>
                        <MaterialCommunityIcons name="thermometer" style={{ color: 'white' }} size={18} />{`  ${Math.round(weatherInfo.main.temp)} ° c`}
                      </Text>
                    </LinearGradient><View colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempday2}>
                      <Text style={homeStyles.tempText}>
                        <MaterialCommunityIcons name="thermometer-chevron-up" style={{ color: 'white' }} size={18} />{`  ${Math.round(weatherInfo.main.temp_max)} ° c`}
                      </Text>
                    </View></>
              )}
            </View>
            
            <View style={homeStyles.tempNumContainer}>
            <MaterialCommunityIcons name="weather-fog" style={{color: 'white'}} size={90} />
              {weatherInfo.main && <Text style={homeStyles.headTemp}>{Math.round(weatherInfo.main.temp)} °</Text>}
            </View>
            {/* description de la condition meteo */}
            {weatherInfo.weather && (
              <Text style={homeStyles.description}>{weatherInfo.weather[0].description}</Text>
            )}
            {/* liste des activités */}
  
            <FlatList
        data={forecastData}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
  {/* infos meteo */}
  {weatherInfo.main && (
  <View style={homeStyles.infoContainer}>

    {/* Vitesse du vent */}
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(255, 217, 55, 0.38)', // Couleur pour le vent
    }}>
        <Text style={{...homeStyles.miniText,
                    color: '#FFD937'}}>Vent</Text>
        <Text style={{...homeStyles.text, color: '#FFD937',}}>
          {weatherInfo.wind.speed} m/s
        </Text>
      <MaterialCommunityIcons name="weather-windy" style={{
        ...homeStyles.icon,
        color: '#FFD937'}} size={22} />
    </View>

    {/* Visibilité */}
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(68, 194, 209, 0.38)', // Couleur pour la visibilité
    }}>
      <Text style={{...homeStyles.miniText,
                  color: '#44C2D1'}}>Visibilité</Text>
      <Text style={{
        ...homeStyles.text,
        color: '#44C2D1',
      }}>{weatherInfo.visibility / 1000} km</Text>
      <MaterialCommunityIcons name="eye-outline" style={{
        ...homeStyles.icon,
        color: '#44C2D1'}} size={22} />
    </View>

    {/* Pression */}
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(255, 54, 54, 0.38)', // Couleur pour la pression
    }}>
    <Text style={{...homeStyles.miniText,
                  color: '#FF3636'}}>Presion</Text>
      <Text style={{
        ...homeStyles.text,
        color: '#FF3636',
      }}>{weatherInfo.main.pressure} hPa</Text>
      <MaterialCommunityIcons name="progress-alert" style={{
        ...homeStyles.icon,
        color: '#FF3636'}} size={22} />
    </View>

    {/* Humidité */}
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(70, 139, 255, 0.38)', // Couleur pour l'humidité
    }}>
      <Text style={{...homeStyles.miniText,
                    color: '#468BFF'}}>Humidité</Text>
      <Text style={{
        ...homeStyles.text,
        color: '#468BFF',
      }}>{weatherInfo.main.humidity}%</Text>
      <MaterialCommunityIcons name="water-outline" style={{
        ...homeStyles.icon,
        color: '#468BFF'}} size={22} />
    </View>

    {/* Ressenti */}
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(255, 126, 54, 0.38)', // Couleur pour la nouvelle info
    }}>
      <Text style={{...homeStyles.miniText,
                    color: '#FF7E36'}}>Ressenti</Text>
      <Text style={{
        ...homeStyles.text,
        color: '#FF7E36',
      }}>{weatherInfo.main.feels_like} °C</Text>
      <MaterialCommunityIcons name="thermometer" style={{
        ...homeStyles.icon,
        color: '#FF7E36'}} size={22} />
    </View>

  </View>
)}


            {weatherInfo.sys && (
              <View style={homeStyles.sun}>
                <Text style={homeStyles.textSun}>{`Lever : ${new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', hour12: false})}`}</Text>
                {/* Utilisez le composant MaterialCommunityIcons de manière appropriée */}
               <MaterialCommunityIcons name="white-balance-sunny" style={homeStyles.icon} size={30} />
                <Text style={homeStyles.textSun}>{`Coucher : ${new Date(weatherInfo.sys.sunset * 1000).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', hour12: false})}`}</Text>
              </View>
              )}
          </View>
        ) : null
      )}
    </View>
  )};
  


export default Home;
