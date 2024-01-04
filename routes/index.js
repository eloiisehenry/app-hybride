import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from "../ecran/tabs"; 
import Home from "../ecran/Home";


const Routes =() => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default Routes;
    {/* <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!selectedCity ? (
        <RootStack.Screen name="Home">
          {props => <HomeScreen {...props} onCitySelected={setSelectedCity} />}
        </RootStack.Screen>
      ) : (
        <RootStack.Screen name="BottomTabs">
          {props => <BottomTabs {...props} city={selectedCity} />}
        </RootStack.Screen>
      )}
    </RootStack.Navigator> */}