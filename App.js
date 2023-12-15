import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/icon-weather.png')}
      />
      <StatusBar style="auto" />

      {/* Input pour le prénom de l'utilisateur */}
      <View style={styles.textInput}>
        <TextInput
          style={{ borderWidth: 1, padding: 10 }}
          placeholder="Prenom"
          onChangeText={(val) => setName(val)}
        />
      </View>

      {/* Espacement */}
      <View style={{ marginVertical: 10 }} />

      {/* Bouton pour valider */}
      <Button
        style={{ borderWidth: 1, padding: 1, marginBottom: 2, backgroundColor:'rgba(31, 31, 31, 1)' }}
        title="Valider"
        onPress={() => {
          alert(`Bonjour ${name} !`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'rgba(31, 31, 31, 1)',
  },
  textInput: {
    width: '100%',
    marginBottom: 20,
  },
});

