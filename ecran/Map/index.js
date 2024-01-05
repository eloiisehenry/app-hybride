import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import mapStyles from './style';

const Map = () => {
  const [searchText, setSearchText] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
        }
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    getLocationAsync();
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
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
    </View>
  );
};

export default Map;
