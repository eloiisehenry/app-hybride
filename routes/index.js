// Routes.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "../ecran/tabs";
import Home from "../ecran/Home";
import Login from "../ecran/Auth/Login";
import Register from "../ecran/Auth/Register";
import Guest from "../ecran/Auth/Guest";




const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="Guest" component={Guest} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
