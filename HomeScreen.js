// HomeScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const HomeScreen = ({ onCitySelected }) => {
  const [city, setCity] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Entrez le nom de la ville"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Soumettre" onPress={() => onCitySelected(city)} />
    </View>
  );
};

export default HomeScreen;
