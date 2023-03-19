import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocatorNavigator from "./LocatorNavigator";
import Settings from "../screens/Settings";
import AboutUs from "../screens/AboutUs";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="LocatorRoot"
        component={LocatorNavigator}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Settings"
        component={Settings}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="AboutUs"
        component={AboutUs}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
