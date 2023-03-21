import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocatorNavigator from "./LocatorNavigator";
import Settings from "../screens/Settings";
import About from "../screens/About";

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
        name="About"
        component={About}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
