// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BottomTabs from './BottomTabs';

const RootStack = createStackNavigator();

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!selectedCity ? (
          <RootStack.Screen name="Home">
            {props => <HomeScreen {...props} onCitySelected={setSelectedCity} />}
          </RootStack.Screen>
        ) : (
          <RootStack.Screen name="BottomTabs">
            {props => <BottomTabs {...props} city={selectedCity} />}
          </RootStack.Screen>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
