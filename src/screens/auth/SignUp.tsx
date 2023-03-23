import React from "react";
import { View, VStack, Input, Button } from "native-base";
import Navigation from "../../components/navigation/Navigation";

const SignUp = (props: any) => {
  return (
    <>
      <Navigation {...props} title="Create Account" />
      <View flex="1" p="4" bg="white">
        <VStack flex="1" w="full" space="2">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button onPress={() => props.navigation.goBack()}>Sign up</Button>
        </VStack>
      </View>
    </>
  );
};

export default SignUp;
