import React, { useState } from "react";
import {
  Button,
  HStack,
  Icon,
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Navigation from "../components/navigation/Navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Settings = (props: any) => {
  // States
  const [showModal, setShowModal] = useState(false);

  // Functions
  const handleChangePassword = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    props.navigation.navigate("SignIn");
  };

  const renderPressable = (text: string, icon: string, onPress?: any) => {
    return (
      text && (
        <Pressable onPress={onPress}>
          <HStack px="6" py="4" justifyContent="space-between">
            <Text fontSize="md">{text}</Text>
            <Icon
              size="6"
              as={MaterialCommunityIcons}
              name={icon}
              color="primary.600"
            />
          </HStack>
        </Pressable>
      )
    );
  };

  return (
    <>
      <Navigation {...props} />
      <VStack>
        {renderPressable(
          "Change password",
          "chevron-right",
          handleChangePassword
        )}
        {renderPressable("Log Out", "logout", handleLogout)}
      </VStack>

      {/* Change password */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Change password</Modal.Header>
          <Modal.Body>
            <VStack space="2">
              <Input placeholder="New password" type="password" />
              <Input placeholder="Confirm password" type="password" />
            </VStack>
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
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Settings;
