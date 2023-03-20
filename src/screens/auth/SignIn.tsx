import React from "react";
import { View, Center, VStack, Input, Button, Image } from "native-base";

const SignIn = (props: any) => {
  return (
    <View flex="1" p="4" bg="white">
      <Center flex="1" px="6">
        <Image
          size="full"
          source={require("../../../assets/caffeine.png")}
          alt="coffee"
        />
      </Center>
      <VStack flex="1" w="full" space="2">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button onPress={() => props.navigation.navigate("Root")}>
          Log in
        </Button>
        <Button onPress={() => props.navigation.navigate("SignUp")}>
          Create account
        </Button>
      </VStack>
    </View>
  );
};

export default SignIn;
