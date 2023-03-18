import React from 'react';
import { View, Center, VStack, Icon, Text, Input, Button } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SignIn = (props: any) => {
  return (
    <View flex="1" p="4">
      <Center flex="1">
        <Icon as={FontAwesome5} name="coffee" color="primary.600" size="120" mb="2" />
        <Text fontSize="4xl">Caffeine</Text>
      </Center>
      <VStack flex="1" w="full" space="2">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button onPress={() => props.navigation.navigate('Root')}>
          Log in
        </Button>
        <Button onPress={() => props.navigation.navigate('SignUp')}>
          Create account
        </Button>
      </VStack>
    </View>
  );
};

export default SignIn;