import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Directory from "../screens/admin/Directory";
import FarmManager from "../screens/admin/FarmManager";

const Stack = createNativeStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Directory" component={Directory} />
      <Stack.Screen name="FarmManager" component={FarmManager} />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
