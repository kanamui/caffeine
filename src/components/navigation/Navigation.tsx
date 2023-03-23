// Modules
import React from "react";
// Components
import { Heading, HStack, Icon, IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Navigation = (props: any) => {
  return (
    <HStack
      py="3"
      space="3"
      alignItems="center"
      px={{ base: 4, md: 8 }}
      bg="primary.800"
    >
      <IconButton
        p="1"
        borderRadius="full"
        icon={
          <Icon
            as={Ionicons}
            size="lg"
            color="white"
            name={props.close ? "close-outline" : "arrow-back-outline"}
          />
        }
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Heading fontSize="lg" color="white">
        {props.title ? props.title : props.route?.name}
      </Heading>
    </HStack>
  );
};

export default Navigation;
