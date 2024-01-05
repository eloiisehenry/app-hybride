import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import homeStyles from './style';
import { FakeActivity } from '../../fakeData/fakeActivity';
import ActivityItem from '../../composantes/ActivityItem';

// Assurez-vous que la clé API est correctement importée
import { API_KEY, WEATHER_BASE_URL, ONECALL_BASE_URL, TIMEMACHINE_BASE_URL, LANG, UNITS } from '../../outils/apiConfig';




const Home = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchWeatherInfo = async () => {
      try {
        if (city) {
          // Requête pour obtenir les informations météorologiques d'aujourd'hui
          const todayUrl = `${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}&lang=${LANG}&units=${UNITS}`;
          const todayResponse = await fetch(todayUrl);
          const todayData = await todayResponse.json();
          console.log('Réponse aujourd\'hui :', todayData);

          setWeatherInfo(todayData);
          setIsLoading(true); // Début du chargement
        }
        setIsLoading(false); // Fin du chargement
      } catch (error) {
        console.error('Erreur lors de la récupération des données météo', error);
        setIsLoading(false); // Fin du chargement en cas d'erreur
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
              <LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempText}>
                <View style={homeStyles.tempTextContainer}>
                  <Text style={homeStyles.tempText}>Hier:  -- °C </Text>
                </View>
              </LinearGradient>
              {weatherInfo.main && (
                <LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempText}>
                  <View style={homeStyles.tempTextContainer}>
                  <Text style={homeStyles.tempText}>Auj: {Math.round(weatherInfo.main.temp)} °C</Text>
                  </View>
                </LinearGradient>
              )}
              <LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempText}>
                <View style={homeStyles.tempTextContainer}>
                  <Text style={homeStyles.tempText}>Dem: -- °C</Text>
                </View>
              </LinearGradient>
            </View>
            
            <View style={homeStyles.tempNumContainer}>
            <MaterialCommunityIcons name="weather-fog" style={{color: 'white'}} size={90} />
              {weatherInfo.main && <Text style={homeStyles.headTemp}>{Math.round(weatherInfo.main.temp)} °C</Text>}
            </View>
  
            <FlatList
              data={FakeActivity}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ActivityItem item={item} />
              )}
            />
  
  {weatherInfo.main && (
  <View style={homeStyles.infoContainer}>
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(255, 217, 55, 0.38)', // Couleur pour le vent
    }}>
      <Text style={{
        ...homeStyles.textWind,
        color: '#FFD937',
        }}>{weatherInfo.wind.speed} m/s</Text>
      <MaterialCommunityIcons name="weather-windy" style={{
        ...homeStyles.icon,
        color: '#FFD937'}} size={22} />
    </View>
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(68, 194, 209, 0.38)', // Couleur pour la visibilité
    }}>
      <Text style={{
        ...homeStyles.text,
        color: '#44C2D1',
      }}>{weatherInfo.visibility / 1000} km</Text>
      <MaterialCommunityIcons name="eye-outline" style={{
        ...homeStyles.icon,
        color: '#44C2D1'}} size={22} />
    </View>
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(255, 54, 54, 0.38)', // Couleur pour la pression
    }}>
      <Text style={{
        ...homeStyles.text,
        color: '#FF3636',
      }}>{weatherInfo.main.pressure} hPa</Text>
      <MaterialCommunityIcons name="progress-alert" style={{
        ...homeStyles.icon,
        color: '#FF3636'}} size={22} />
    </View>
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(70, 139, 255, 0.38)', // Couleur pour l'humidité
    }}>
      <Text style={{
        ...homeStyles.text,
        color: '#468BFF',
      }}>{weatherInfo.main.humidity}%</Text>
      <MaterialCommunityIcons name="water-outline" style={{
        ...homeStyles.icon,
        color: '#468BFF'}} size={22} />
    </View>
    {/* Nouvelle information météo */}
    <View style={{
      ...homeStyles.infoItem,
      backgroundColor: 'rgba(255, 126, 54, 0.38)', // Couleur pour la nouvelle info
    }}>
      <Text style={{
        ...homeStyles.text,
        color: '#FF7E36',
      }}>{weatherInfo.main.feels_like} °C</Text>
      <MaterialCommunityIcons name="weather-windy-variant" style={{
        ...homeStyles.icon,
        color: '#FF7E36'}} size={22} />
    </View>

  </View>
)}


            {weatherInfo.sys && (
              <View style={homeStyles.sun}>
                <Text style={homeStyles.text}>{`Lever : ${new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', hour12: false})}`}</Text>
                {/* Utilisez le composant MaterialCommunityIcons de manière appropriée */}
               <MaterialCommunityIcons name="weather-sunny" style={homeStyles.icon} size={26} />
                <Text style={homeStyles.text}>{`Coucher : ${new Date(weatherInfo.sys.sunset * 1000).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', hour12: false})}`}</Text>
              </View>
              )}
          </View>
        ) : null
      )}
    </View>
  )};
  


export default Home;
