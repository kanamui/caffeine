import React from "react";
import { ITransport } from "../models/ITransport.interface";
import { Box, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getTransportIcon } from "../logic/Utilities";

const TransportIcon = ({
  type,
  size = 6,
}: {
  type: ITransport;
  size?: number;
}) => {
  const icon = getTransportIcon(type);

  return icon ? (
    <Box p="2" bg="primary.600" borderRadius="full">
      <Icon as={MaterialCommunityIcons} name={icon} size={size} color="white" />
    </Box>
  ) : null;
};

export default TransportIcon;
