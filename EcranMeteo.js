import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EcranMeteo = ({ city }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const apiKey = 'a2fac297d18d16751c1e2c8f207eaa6c';

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherInfo(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données météo', error);
      }
    };

    fetchWeatherInfo();
  }, [city]);

  return (
    <View style={styles.container}>
      {weatherInfo ? (
        <View>
          <Text style={styles.text}>{`${weatherInfo.name}`}</Text>
          <Text style={styles.text}>{`Température: ${weatherInfo.main.temp} °C`}</Text>
          <Text style={styles.text}>{`Conditions: ${weatherInfo.weather[0].description}`}</Text>
          <Text style={styles.text}>{`Pression: ${weatherInfo.main.pressure} hPa`}</Text>
          {/* UV index et qualité de l'air ne sont généralement pas disponibles dans la réponse standard de l'API */}
          <Text style={styles.text}>{`Vent: ${weatherInfo.wind.speed} m/s`}</Text>
          <Text style={styles.text}>{`Visibilité: ${weatherInfo.visibility / 1000} km`}</Text>
          {/* Convertir le temps Unix en heures et minutes pour le lever et coucher du soleil */}
          <Text style={styles.text}>{`Lever du soleil: ${new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString()}`}</Text>
          <Text style={styles.text}>{`Coucher du soleil: ${new Date(weatherInfo.sys.sunset * 1000).toLocaleTimeString()}`}</Text>
        </View>
      ) : (
        <Text>Chargement...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default EcranMeteo;
