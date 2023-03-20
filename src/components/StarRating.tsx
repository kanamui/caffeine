import React from "react";
import { HStack, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StarRating = ({
  rating = 0,
  size = 4,
}: {
  rating?: number;
  size?: number;
}) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const starArray = [...Array(fullStars).keys()].map((_, index) => (
    <Icon
      key={index}
      size={size}
      as={MaterialCommunityIcons}
      name="star"
      color="yellow.400"
    />
  ));

  if (halfStars > 0) {
    starArray.push(
      <Icon
        key={fullStars}
        size={size}
        as={MaterialCommunityIcons}
        name="star-half-full"
        color="yellow.400"
      />
    );
  }

  const emptyStarArray = [...Array(emptyStars).keys()].map((_, index) => (
    <Icon
      key={fullStars + halfStars + index}
      size={size}
      as={MaterialCommunityIcons}
      name="star-outline"
      color="yellow.400"
    />
  ));

  return <HStack>{[...starArray, ...emptyStarArray]}</HStack>;
};

export default StarRating;
