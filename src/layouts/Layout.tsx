import React from "react";
import { useRoute } from "@react-navigation/native";
import { Box, HStack, ScrollView } from "native-base";
import NavigationLocator from "../components/navigation/NavigationLocator";

const Layout = (props: any) => {
  const route = useRoute();
  return (
    <Box h="full" safeAreaBottom>
      {route.name === "Locator" && (
        <NavigationLocator navigation={props.navigation} />
      )}
      <HStack flex={1}>
        <ScrollView
          h="full"
          bg="white"
          _contentContainerStyle={{ p: props?.p || "24px" }}
        >
          {props.children}
        </ScrollView>
      </HStack>
    </Box>
  );
};

export default Layout;
