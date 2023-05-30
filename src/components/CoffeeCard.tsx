// Modules
import React from "react";
import { IFarm } from "../models/IFarm.interface";
// Components
import {
  Box,
  HStack,
  Text,
  Stack,
  Heading,
  AspectRatio,
  Image,
  Pressable,
} from "native-base";

interface IProps {
  data: IFarm;
  navigation?: any;
}

const CoffeeCard = ({ data, navigation }: IProps) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Farm", { data: data });
      }}
    >
      <HStack
        w="100%"
        mb="2"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        bgColor="gray.50"
      >
        <Box w="30%">
          <AspectRatio w="full" ratio={1}>
            <Image
              size="full"
              source={require("../../assets/caffeine.png")}
              alt="coffee"
            />
          </AspectRatio>
        </Box>
        <Stack p="3" space={3} w="70%">
          <Stack space={1}>
            <HStack justifyContent="space-between">
              <Heading size="md">{data?.title}</Heading>
            </HStack>
            <Text fontSize="xs" numberOfLines={2}>
              {data?.description}
            </Text>
          </Stack>
        </Stack>
      </HStack>
    </Pressable>
  );
};

export default CoffeeCard;
