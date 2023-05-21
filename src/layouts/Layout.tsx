import React from "react";
import { Box, ScrollView } from "native-base";

const Layout = (props: any) => {
  return (
    <Box h="full" safeAreaBottom>
      <ScrollView p={4}>
        {props.children}
      </ScrollView>
    </Box>
  );
};

export default Layout;
