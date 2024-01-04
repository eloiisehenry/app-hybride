import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import rechercheStyles from './style'; // Importez votre style

const Recherche = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const cities = [
    'Paris',
    'New York',
    'London',
    'Tokyo',
    // ... ajoutez d'autres villes ici
  ];

  const handleSearch = (text) => {
    const filtered = cities.filter(city => city.toLowerCase().includes(text.toLowerCase()));
    setFilteredCities(filtered);
    setSearchText(text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(`Selected city: ${item}`)}>
      <View style={rechercheStyles.item}>
        <Text style={rechercheStyles.itemText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={rechercheStyles.container}>
      <TextInput
        style={rechercheStyles.input}
        placeholder="Rechercher une ville"
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList horizontal={true}
        data={filteredCities}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Recherche;
