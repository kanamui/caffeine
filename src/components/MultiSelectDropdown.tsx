import { useEffect, useState } from "react";
import {
  Actionsheet,
  CloseIcon,
  HStack,
  IconButton,
  Pressable,
  Text,
  useDisclose,
} from "native-base";
import { IMultiSelectDropdown } from "../models/components/IMultiSelectDropdown.interface";

const MultiSelectDropdown = ({
  data,
  value,
  placeholder,
  onChange,
}: IMultiSelectDropdown) => {
  // Hooks
  const { isOpen, onOpen, onClose } = useDisclose();
  const [selected, setSelected] = useState<string[]>([]);

  // Handlers
  const onSelect = (item: string) => {
    if (!selected.includes(item)) {
      const value = [...selected, item];
      setSelected(value);
      if (onChange) onChange(value);
    }
    onClose();
  };

  const onRemove = (item: string) => {
    if (selected.includes(item)) {
      const value = selected.filter((el: string) => el !== item);
      setSelected(value);
      if (onChange) onChange(value);
    }
  };

  // Effects
  useEffect(() => {
    if (value && value.length > 0) {
      const match = value.filter(item => data.includes(item));
      setSelected(match);
    }
  }, [value]);

  return (
    <>
      <Pressable onPress={onOpen}>
        <HStack
          w="full"
          flexWrap="wrap"
          borderRadius="sm"
          borderWidth="1"
          borderColor="light.300"
          pt="2"
          px="3"
          space="2"
        >
          {selected.length > 0 ? (
            selected.map((item: string, key: number) => (
              <HStack
                key={key}
                borderRadius="full"
                pl="2"
                pr="1"
                py="1"
                mb="2"
                space="1"
                bg="gray.200"
              >
                <Text>{item}</Text>
                <IconButton
                  p="1"
                  borderRadius="full"
                  icon={<CloseIcon size="3" />}
                  onPress={() => onRemove(item)}
                />
              </HStack>
            ))
          ) : (
            <Text mb="2" color="light.400">
              {placeholder}
            </Text>
          )}
        </HStack>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          {data.map((item: string, key: number) => (
            <Actionsheet.Item key={key} onPress={() => onSelect(item)}>
              {item}
            </Actionsheet.Item>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default MultiSelectDropdown;
