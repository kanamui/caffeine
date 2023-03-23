import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocatorNavigator from "./LocatorNavigator";
import Settings from "../screens/Settings";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LocatorRoot" component={LocatorNavigator} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
