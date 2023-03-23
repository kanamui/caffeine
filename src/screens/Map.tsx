import React from "react";
import {
  ArrowBackIcon,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import TransportIcon from "../components/TransportIcon";
import TransportCard from "../components/TransportCard";

const Map = ({ route, navigation }: any) => {
  const { data } = route.params;

  return (
    <Box size="full" p="6" justifyContent="flex-end" bg="blue.200">
      <IconButton
        position="absolute"
        left="6"
        top="6"
        p="3"
        borderRadius="full"
        bg="white"
        shadow="4"
        icon={<ArrowBackIcon size="5" color="primary.600" />}
        onPress={() => navigation.goBack()}
      />

      {/* TODO: Google Maps */}

      {/* Commute directions */}
      <Box
        w="full"
        h="50%"
        bg="gray.100"
        shadow="4"
        borderTopWidth="8"
        borderColor="primary.600"
      >
        <ScrollView size="full">
          {/* Summary */}
          <HStack
            w="full"
            px="4"
            pb="4"
            bg="white"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex w="75%" flexDirection="row" flexWrap="wrap">
              {data.map(
                (el: any, key: number) =>
                  el.type !== "Walk" && (
                    <Box key={key}>
                      <TransportIcon type={el.type} />
                    </Box>
                  )
              )}
            </Flex>
            <Text mt="4" fontSize="xl" bold>3.5 hrs</Text>
          </HStack>

          {/* Instructions */}
          <VStack space="4" p="4">
            {data.map((el: any, key: number) => (
              <Box key={key}>
                <TransportCard type={el.type} instruction={el.instruction} />
              </Box>
            ))}
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Map;
