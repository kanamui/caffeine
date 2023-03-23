// Modules
import React, { useState } from "react";
import { IReview } from "../models/IReview.interface";
// Components
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Modal,
  ScrollView,
  Text,
  TextArea,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import StarRating from "../components/StarRating";

const Reviews = ({ route, navigation }: any) => {
  // Variables
  const { rating, reviews } = route.params;
  const [showModal, setShowModal] = useState(false);

  const renderReview = ({ data }: { data: IReview }) => {
    return (
      <Box p="4" borderBottomWidth="1" borderBottomColor="gray.200">
        <VStack space="2">
          <HStack space="2">
            <Icon
              size="3xl"
              as={MaterialIcons}
              name="account-circle"
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
    <>
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
                as={MaterialIcons}
                name="rate-review"
                color="white"
              />
            }
            onPress={() => setShowModal(true)}
          >
            Write a review
          </Button>
        </VStack>

        {/* Reviews */}
        {reviews?.map((el: IReview, key: number) => (
          <Box key={key}>{renderReview({ data: el })}</Box>
        ))}
      </ScrollView>

      {/* Write a review */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Write a review</Modal.Header>
          <Modal.Body>
            <TextArea placeholder="Your review..." autoCompleteType="" />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Submit
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Reviews;
