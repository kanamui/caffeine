// Modules
import React from "react";
// Components
import {
  HStack,
  Icon,
  Input,
  Menu,
  Pressable,
  SearchIcon,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavigationLocator = ({ navigation }: any) => {
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
        InputLeftElement={<SearchIcon ml="3" size="4" />}
      />
      <Menu
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="Menu" {...triggerProps}>
              <Icon as={MaterialCommunityIcons} name="dots-vertical" size="6" />
            </Pressable>
          );
        }}
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          Settings
        </Menu.Item>
        <Menu.Item
          onPress={() => {
            navigation.navigate("AboutUs");
          }}
        >
          About Us
        </Menu.Item>
      </Menu>
    </HStack>
  );
};

export default NavigationLocator;
