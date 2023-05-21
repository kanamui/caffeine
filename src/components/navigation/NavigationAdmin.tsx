// Modules
import React from "react";
// Components
import { HStack, Icon, IconButton, Input, SearchIcon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface INavigationAdmin {
  navigation: any;
  value?: string | undefined;
  onChangeText?: (text: string) => void;
}

const NavigationAdmin = ({
  navigation,
  value,
  onChangeText,
}: INavigationAdmin) => {
  return (
    <HStack
      py="3"
      space="3"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 8 }}
      bg="primary.800"
    >
      <Input
        flex="1"
        placeholder="Search Cafe..."
        w="full"
        h="9"
        borderRadius="10"
        fontSize="16"
        InputLeftElement={<SearchIcon ml="3" size="4" />}
        value={value}
        onChangeText={onChangeText}
        color="white"
      />
      <IconButton
        _pressed={{
          bg: "green.800",
        }}
        p="1"
        bg="green.600"
        borderWidth="1"
        borderColor="white"
        borderRadius="full"
        icon={
          <Icon
            as={MaterialCommunityIcons}
            name="plus"
            size="lg"
            color="white"
          />
        }
      />
    </HStack>
  );
};

export default NavigationAdmin;
