import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Directory from "../screens/admin/Directory";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Directory" component={Directory} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
