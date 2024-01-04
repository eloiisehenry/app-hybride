import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, FlatList } from 'react-native';
import homeStyles from './style';
import { FakeActivity } from '../../fakeData/fakeActivity';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [tempHier, setTempHier] = useState(null);
  const [tempDemain, setTempDemain] = useState(null);
  const apiKey = 'a2fac297d18d16751c1e2c8f207eaa6c';

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      try {
        if (city) {
          const todayUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;
          const todayResponse = await fetch(todayUrl);
          const todayData = await todayResponse.json();
          setWeatherInfo(todayData);

          if (todayData.coord) {
            const yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);

            const yesterdayUrl = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${todayData.coord.lat}&lon=${todayData.coord.lon}&dt=${Math.floor(yesterdayDate.getTime() / 1000)}&appid=${apiKey}&lang=fr&units=metric`;
            const yesterdayResponse = await fetch(yesterdayUrl);
            const yesterdayData = await yesterdayResponse.json();
            setTempHier(yesterdayData.current ? yesterdayData.current.temp : null);

            const tomorrowUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${todayData.coord.lat}&lon=${todayData.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&lang=fr&units=metric`;
            const tomorrowResponse = await fetch(tomorrowUrl);
            const tomorrowData = await tomorrowResponse.json();
            setTempDemain(tomorrowData.daily && tomorrowData.daily[1] ? tomorrowData.daily[1].temp.day : null);
          }
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données météo', error);
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
        <Text style={homeStyles.headTemp}>{weatherInfo ? weatherInfo.name : ''}</Text>
        <Text style={homeStyles.fullDate}>{formatDate(new Date())}</Text>
      </View>
      {weatherInfo ? (
        <View>
          <View style={homeStyles.tempContainer}>
          <LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempText}>
            <View style={homeStyles.tempTextContainer}>
              <Text style={homeStyles.tempText}>Hier: {tempHier !== null ? `${tempHier} °C` : '-- °C'}</Text>
            </View>
          </LinearGradient>
            {weatherInfo.main && (
              <LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempText}>
                <View style={homeStyles.tempTextContainer}>
                  <Text style={homeStyles.tempText}>Auj: {weatherInfo.main.temp} °C</Text>
                </View>
              </LinearGradient>
            )}
            <LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.tempText}>
              <View style={homeStyles.tempTextContainer}>
                <Text style={homeStyles.tempText}>Dem: {tempDemain !== null ? `${tempDemain} °C` : '-- °C'}</Text>
              </View>
            </LinearGradient>
          </View>
          
          {/* temperature du jour */}
          <View style={homeStyles.tempNumContainer}>
            {weatherInfo.main && <Text style={homeStyles.largeWhiteText}>{weatherInfo.main.temp} °C</Text>}
          </View>

          {/* prevision sur 4 jours */}
          <FlatList
            data={FakeActivity}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
            <LinearGradient colors={['#EF62E5', '#2B63F3']} style={homeStyles.dayContainer}>
              <Text style={homeStyles.text}>{item.title}</Text>
              <Text style={homeStyles.text}>{item.time}</Text>
              <Text style={homeStyles.text}>{item.location}</Text>
            </LinearGradient>
            )}
          />

          {/* infos meteorologiques */}
          {weatherInfo.main && (
            <View style={homeStyles.infoContainer}>
              <Text style={homeStyles.text}>{`Vent: ${weatherInfo.wind.speed} m/s`}</Text>
              <Text style={homeStyles.text}>{`Visibilité: ${weatherInfo.visibility / 1000} km`}</Text>
              <Text style={homeStyles.text}>{`Pression: ${weatherInfo.main.pressure} hPa`}</Text>
              <Text style={homeStyles.text}>{`Humidité: ${weatherInfo.main.humidity}%`}</Text>
            </View>
          )}
          {weatherInfo.sys && (
            <View>
              <Text style={homeStyles.text}>{`Lever du soleil: ${new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', hour12: false})}`}</Text>
              <Text style={homeStyles.text}>{`Coucher du soleil: ${new Date(weatherInfo.sys.sunset * 1000).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', hour12: false})}`}</Text>
            </View>
          )}
          
        </View>
      ) : (
        <Text style={homeStyles.loading}>Chargement...</Text>
      )}
    </View>
  );
};

export default Home;
