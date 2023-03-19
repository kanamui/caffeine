// Modules
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Components
import Locator from "../screens/Locator";
import Farm from "../screens/Farm";
import Map from "../screens/Map";
import Reviews from "../screens/Reviews";

const Stack = createNativeStackNavigator();

const LocatorNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Locator"
        component={Locator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Farm"
        component={Farm}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Map"
        component={Map}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Reviews"
        component={Reviews}
      />
    </Stack.Navigator>
  );
};

export default LocatorNavigator;
