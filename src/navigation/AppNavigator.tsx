import React from "react";
import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Box size="full" bg="primary.800" safeAreaTop>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="Root" component={RootNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Box>
  );
};

export default AppNavigator;
