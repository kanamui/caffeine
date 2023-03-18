import React from "react";
import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AnimatedPressable from "../components/AnimatedPressable";
import StarRating from "../components/StarRating";

const Farm = ({ route, navigation }: any) => {
  // Variables
  const { data } = route.params;
  const rating = data?.reviews
    ? data.reviews.reduce((a: any, b: any) => {
        return a + b.rating;
      }, 0) / data.reviews.length
    : 0;

  // Functions
  const renderPressable = (text: string, icon: string) => {
    return (
      <AnimatedPressable>
        <HStack px="6" py="3" space="6">
          <Icon
            size="5"
            as={<MaterialCommunityIcons name={icon} />}
            color="primary.600"
          />
          <Text>{text}</Text>
        </HStack>
      </AnimatedPressable>
    );
  };

  return (
    <Box size="full" bg="white">
      {/* Cover Image */}
      <Box>
        <AspectRatio w="full" ratio={16 / 9}>
          <Image
            size="full"
            source={require("../../assets/coffee-farm.jpg")}
            alt="coffee-farm"
          />
        </AspectRatio>
        <IconButton
          position="absolute"
          right="2"
          top="2"
          p="1"
          bgColor="white"
          borderRadius="full"
          shadow="2"
          icon={<Icon as={MaterialCommunityIcons} name="close" size="6" />}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Box>

      {/* Content */}
      <ScrollView size="full">
        <VStack px="6" py="4" mb="3" borderWidth="1" borderColor="gray.200">
          {data?.title && <Text fontSize="2xl">{data?.title}</Text>}
          <HStack space="2">
            <Box pt="0.5">
              <StarRating rating={rating} />
            </Box>
            <Link
              _text={{
                color: "cyan.600",
              }}
              isUnderlined
              onPress={() => {
                navigation.navigate("Reviews", {
                  rating: rating,
                  reviews: data?.reviews,
                });
              }}
            >
              {data?.reviews?.length || 0} reviews
            </Link>
          </HStack>
        </VStack>
        {data?.address && renderPressable(data.address, "map-marker-outline")}
        {data?.coffeeTypes &&
          renderPressable(data.coffeeTypes.join(", ").toString(), "coffee")}
        {data?.email && renderPressable(data.email, "email")}
        {data?.mobile && renderPressable(data.mobile, "phone")}
      </ScrollView>
    </Box>
  );
};

export default Farm;
