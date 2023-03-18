// Modules
import React from "react";
// Components
import { HStack, Input, Icon } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const NavigationLocator = () => {
  return (
    <HStack
      py="3"
      space="3"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 8 }}
      bg="primary.800"
      borderBottomColor="gray.200"
      borderBottomWidth="1"
    >
      <Input
        flex="1"
        placeholder="Search Cafe..."
        w="full"
        h="9"
        borderRadius="10"
        fontSize="16"
        InputLeftElement={
          <Icon ml="3" size="4" as={<Ionicons name="search" />} />
        }
      />
    </HStack>
  );
};

export default NavigationLocator;
