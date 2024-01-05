import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import rechercheStyles from './style'; // Import your style
import { FakeCityConditions } from '../../fakeData/fakeCityConditions';
import VillesItem from '../../composantes/VillesItem';
import { LinearGradient } from 'expo-linear-gradient';
import { API_KEY, WEATHER_BASE_URL, ONECALL_BASE_URL, TIMEMACHINE_BASE_URL, LANG, UNITS } from '../../outils/apiConfig';

const Recherche = () => {
  return (
    <View style={rechercheStyles.container}>
      <TextInput
        style={rechercheStyles.input}
        placeholder="Rechercher une ville"
      />

      <FlatList
        data={FakeCityConditions}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <VillesItem item={item} />
        )}
      />
    </View>
  );
};

export default Recherche;
