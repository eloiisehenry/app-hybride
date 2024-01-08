import React, { useState, useEffect} from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import rechercheStyles from './style';
import VillesItem from '../../composantes/VillesItem';
import { API_KEY, WEATHER_BASE_URL, LANG, UNITS } from '../../outils/apiConfig';

const Recherche = () => {
  const [cityData, setCityData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const cities = ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Bordeaux", "Strasbourg", "Montpellier", "Lille"];

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

  const handleSearch = async () => {
    const result = await fetchWeatherDataForCity(searchText);
    setSearchResult(result);
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
    <View style={rechercheStyles.container}>
      <TextInput
        style={rechercheStyles.input}
        placeholder="Rechercher une ville"
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch} // Déclenche la recherche lorsque l'utilisateur soumet le formulaire
      />
      {searchResult && <VillesItem item={searchResult} />}
      <FlatList
        data={cityData}
        keyExtractor={(item) => item.name}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <VillesItem item={item} />}
      />
    </View>
  );
};

export default Recherche;
