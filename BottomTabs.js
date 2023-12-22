// BottomTabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EcranMeteo from './EcranMeteo';
// ... autres imports

const Tab = createBottomTabNavigator();

const BottomTabs = ({ city }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Météo">
        {props => <EcranMeteo {...props} city={city} />}
      </Tab.Screen>
      {/* Autres onglets ici */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
