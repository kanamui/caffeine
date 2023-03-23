import React from "react";
import { Box, HStack, ScrollView } from "native-base";

const Layout = (props: any) => {
  return (
    <Box h="full" safeAreaBottom>
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
