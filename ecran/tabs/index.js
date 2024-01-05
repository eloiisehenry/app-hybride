// BottomTabs.js

import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Recherche from '../Recherche';
import Profil from '../Profil';
import Map from '../Map';


// import EcranMeteo from './EcranMeteo';
// ... autres imports

const BottomTabs = ({ city }) => {

    const Tab = createMaterialBottomTabNavigator();

    return (
          <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: '#282828' }}
            activeColor="#fff"
            inactiveColor="#aaa" // Set the color for inactive icons
            shifting={false}
            labeled={true}
            sceneAnimationEnabled={false}
          >
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Recherche"
            component={Recherche}
            options={{
              tabBarLabel: 'Recherche',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={26} />
              ),
            }}
          /><Tab.Screen
          name="Profil"
          component={Profil}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            tabBarColor: '#3E3E3E', // Ici, on définit la couleur de l'onglet actif
          }}
        />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarLabel: 'Map',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="map-legend" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
};

export default BottomTabs;

{/* <Tab.Navigator>
      <Tab.Screen name="Météo">
        {props => <EcranMeteo {...props} city={city} />}
      </Tab.Screen>
      {/* Autres onglets ici */}
    // </Tab.Navigator> 
// */}