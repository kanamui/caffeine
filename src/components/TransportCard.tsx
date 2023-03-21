import React from "react";
import { ITransportCard } from "../models/components/ITransportCard.interface";
import { getTransportIcon } from "../logic/Utilities";
import { Box, HStack, Icon, Text, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TransportCard = ({ type, instruction }: ITransportCard) => {
  const icon = getTransportIcon(type);

  return icon ? (
    <HStack w="full" borderRadius="md" bg="white" shadow="2">
      <Box h="full" p="4" borderRadius="md" bg="primary.600">
        <Icon as={MaterialCommunityIcons} name={icon} size="6" color="white" />
      </Box>
      <VStack size="full" pl="4" pr="16" py="2">
        {type !== "Walk" && (
          <Box
            pb="2"
            borderBottomWidth="1"
            borderColor="gray.200"
          >
            <Text bold fontSize="lg" color="gray.700">
              {type.toUpperCase()}
            </Text>
          </Box>
        )}
        <Box pt="2" justifyContent="center">
          <Text fontSize="xs">{instruction}</Text>
        </Box>
      </VStack>
    </HStack>
  ) : null;
};

export default TransportCard;
