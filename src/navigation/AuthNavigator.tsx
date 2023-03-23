import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
