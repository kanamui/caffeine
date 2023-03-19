// Modules
import React from "react";
import { IReview } from "../models/IReview.interface";
// Components
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StarRating from "../components/StarRating";

const Reviews = ({ route, navigation }: any) => {
  // Variables
  const { rating, reviews } = route.params;

  const renderReview = ({ data }: { data: IReview }) => {
    return (
      <Box p="4" borderBottomWidth="1" borderBottomColor="gray.200">
        <VStack space="2">
          <HStack space="2">
            <Icon
              size="3xl"
              as={<MaterialIcons name="account-circle" />}
              color="gray.400"
            />
            <VStack>
              <Text>{data?.user}</Text>
              <StarRating rating={data?.rating} size={3} />
            </VStack>
          </HStack>
          <Text>{data?.review}</Text>
        </VStack>
      </Box>
    );
  };

  return (
    <ScrollView size="full" bg="white">
      {/* Header */}
      <VStack
        px="6"
        pb="4"
        space="4"
        borderBottomWidth="1"
        borderBottomColor="gray.200"
      >
        <HStack space="6">
          <Heading size="4xl">{Math.floor(rating).toFixed(1)}</Heading>
          <VStack pt="4" space="1">
            <StarRating rating={rating} size={6} />
            <Text color="muted.400" bold>
              {reviews?.length || 0} REVIEWS
            </Text>
          </VStack>
        </HStack>
        <Button
          startIcon={
            <Icon
              size="4"
              as={<MaterialIcons name="rate-review" />}
              color="white"
            />
          }
        >
          Write a review
        </Button>
      </VStack>

      {/* Reviews */}
      {reviews?.map((el: IReview, key: number) => (
        <Box key={key}>{renderReview({ data: el })}</Box>
      ))}
    </ScrollView>
  );
};

export default Reviews;
