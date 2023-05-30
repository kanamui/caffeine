// Modules
import React, { useRef, useState } from "react";
import { IFarm } from "../models/IFarm.interface";
// Components
import {
  HStack,
  Heading,
  IconButton,
  Icon,
  Box,
  AlertDialog,
  Button,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IProps {
  data: IFarm;
  navigation?: any;
}

const DirectoryCard = ({ data, navigation }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);

  return (
    <>
      <Pressable
        onPress={() => {
          navigation.navigate("FarmManager", { data: data, action: "Edit" });
        }}
      >
        <HStack
          w="full"
          mb="2"
          p="2"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          bgColor="gray.50"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flex={1}>
            <Heading numberOfLines={1} size="sm">
              {data?.title}
            </Heading>
          </Box>
          <HStack space="1">
            {/* <IconButton
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="pencil-outline"
                  size="lg"
                  color="gray.400"
                />
              }
            /> */}
            <IconButton
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="trash-can-outline"
                  size="lg"
                  color="red.600"
                />
              }
              onPress={onOpen}
            />
          </HStack>
        </HStack>
      </Pressable>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Farm</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to delete this farm permanently?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

export default DirectoryCard;
