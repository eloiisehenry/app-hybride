// Routes.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "../ecran/tabs";
import Home from "../ecran/Home";




const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={BottomTabs} />
        {/* <Stack.Screen name="GuestSignIn" component={GuestSignIn} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
